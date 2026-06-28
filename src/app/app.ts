import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Thin root shell. The entire page lives in {@link Home}, rendered through the
 * router so the build can prerender the single route to static HTML (SSG) and the
 * client can hydrate it — the router exists specifically to unlock prerendering
 * for the LCP win.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
export class App {}
