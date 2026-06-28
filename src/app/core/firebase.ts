import type { FirebaseApp } from 'firebase/app';
import type { Analytics } from 'firebase/analytics';
import { environment } from '../../environments/environment';

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;
let logEventFn: (typeof import('firebase/analytics'))['logEvent'] | undefined;

/**
 * Initialise Firebase + Analytics lazily and off the critical path. The SDK is
 * dynamically imported so esbuild splits it into its own chunk (kept out of the
 * initial bundle), and any failure is swallowed so it can never break page
 * render. Analytics also requires a browser with cookies/IndexedDB, hence the
 * isSupported() guard.
 */
export async function initFirebase(): Promise<void> {
  // No-op during prerender/SSR — Firebase Analytics is browser-only, and this
  // initializer also runs in the Node prerender pass (where `window` is undefined).
  if (typeof window === 'undefined') return;
  if (app) return;
  // Defer the Analytics SDK (it loads gtag.js, ~150KB and largely unused at first
  // paint) until the browser is idle, so it never competes with LCP for bandwidth.
  await new Promise<void>((resolve) => {
    const ric = (
      window as unknown as { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => void }
    ).requestIdleCallback;
    if (typeof ric === 'function') ric(() => resolve(), { timeout: 4000 });
    else setTimeout(resolve, 2000);
  });
  if (app) return;
  try {
    const { initializeApp } = await import('firebase/app');
    app = initializeApp(environment.firebase);
    const { getAnalytics, isSupported, logEvent } = await import('firebase/analytics');
    if (await isSupported()) {
      analytics = getAnalytics(app);
      logEventFn = logEvent;
      logEvent(analytics, 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  } catch (err) {
    console.warn('[firebase] init skipped:', err);
  }
}

/** Fire a custom Analytics event when Analytics is available; otherwise no-op. */
export function track(event: string, params?: Record<string, unknown>): void {
  if (analytics && logEventFn) logEventFn(analytics, event, params as never);
}
