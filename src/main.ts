import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var env;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

async function run() {
  // Call the function that was exposed in Node.
  const data = await env();
  // tslint:disable-next-line:forin
  for (const type in data) {
    const div = document.createElement('div');
    div.textContent = `${type}: ${data[type]}`;
    document.body.appendChild(div);
  }
}
