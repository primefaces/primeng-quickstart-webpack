//library imports: shims, pollyfills, etc
import 'es7-reflect-metadata/dist/browser';
import 'zone.js/dist/zone';

import 'script!primeui/primeui-ng-all.min.js';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import 'rxjs/Rx';

bootstrap(AppComponent).catch(err => console.error(err));;