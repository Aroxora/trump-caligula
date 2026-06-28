import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// Angular 21 passes a BootstrapContext into the server bootstrap; it must be
// forwarded to bootstrapApplication (omitting it throws NG0401 "Missing Platform").
const bootstrap = (context: BootstrapContext) => bootstrapApplication(App, config, context);

export default bootstrap;
