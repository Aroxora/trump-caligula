import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Prerender the single root route to static HTML at build time so the hero — the
 * LCP element — and the document head paint without waiting for the JS bundle.
 */
export const serverRoutes: ServerRoute[] = [{ path: '**', renderMode: RenderMode.Prerender }];
