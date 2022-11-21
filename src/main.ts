import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableMapSet } from 'immer';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

enableMapSet();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
