import { FirebaseApp, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics, isSupported, logEvent } from 'firebase/analytics';
import { environment } from '../../environments/environment';

let app: FirebaseApp | undefined;
let analytics: Analytics | undefined;

/**
 * Initialise Firebase and (where supported) Analytics. Analytics requires a
 * browser with cookies/IndexedDB, so we guard with isSupported() and never let
 * a failure here break the page render.
 */
export async function initFirebase(): Promise<void> {
  if (app) return;
  try {
    app = initializeApp(environment.firebase);
    if (await isSupported()) {
      analytics = getAnalytics(app);
    }
  } catch (err) {
    console.warn('[firebase] init skipped:', err);
  }
}

/** Fire a custom Analytics event when Analytics is available; otherwise no-op. */
export function track(event: string, params?: Record<string, unknown>): void {
  if (analytics) logEvent(analytics, event, params as never);
}
