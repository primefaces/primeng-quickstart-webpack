import {NgModule}      from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
<<<<<<< HEAD
import 'rxjs/add/operator/toPromise';
=======
>>>>>>> origin/master

import {AppComponent}  from './app.component';
import {CarService} from './cars/carservice';
import {InputTextModule,DataTableModule,ButtonModule,DialogModule} from 'primeng/primeng';
<<<<<<< HEAD
=======

>>>>>>> origin/master
@NgModule({
  imports:      [BrowserModule,FormsModule,HttpModule,InputTextModule,DataTableModule,ButtonModule,DialogModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers:    [CarService]
})
export class AppModule { }
