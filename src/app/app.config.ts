import {
  ApplicationConfig,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { Home } from './home.component';
import { initFirebase } from './core/firebase';

// A single in-page route holds the whole site (Home). The router exists so the
// build can prerender that route to static HTML (SSG); provideClientHydration
// lets the client reuse the prerendered DOM instead of re-rendering it.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter([{ path: '', component: Home }]),
    provideClientHydration(withEventReplay()),
    // Analytics only — kicked off without blocking bootstrap or first paint.
    provideAppInitializer(() => {
      void initFirebase();
    }),
  ],
};
