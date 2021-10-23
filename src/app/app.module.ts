import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';

import {
  AppRoutingModule
} from './app-routing.module';
import {
  AppComponent
} from './app.component';
import {
  PrekeComponent
} from './components/preke/preke.component';
import {
  PrekesComponent
} from './components/prekes/prekes.component';
import { KrepselisComponent } from './components/krepselis/krepselis.component';


@NgModule({
  declarations: [
    AppComponent,
    PrekeComponent,
    PrekesComponent,
    KrepselisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
