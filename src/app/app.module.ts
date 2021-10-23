import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PrekesComponent } from './components/prekes/prekes.component';
import { PrekeComponent } from './components/preke/preke.component';

@NgModule({
  declarations: [
    AppComponent,
    PrekeComponent,
    PrekesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }