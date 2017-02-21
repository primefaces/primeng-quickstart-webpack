<<<<<<< HEAD
import {AppModule} from './app.module';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';

declare var process: any;

if (process.env.ENV === 'production') {
  enableProdMode();
}
=======
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';
>>>>>>> origin/master

platformBrowserDynamic().bootstrapModule(AppModule);