//library imports: shims, pollyfills, etc
import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {AppComponent} from './app.component';
import {enableProdMode} from '@angular/core';
import {LocationStrategy,HashLocationStrategy} from '@angular/common';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

//enableProdMode();
bootstrap(AppComponent, [
  disableDeprecatedForms(),
  provideForms(),
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);