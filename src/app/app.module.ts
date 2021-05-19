import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimaryMenuComponent } from './primaryMenu/primaryMenu.component';
import {ServerComponent} from './server/server.component'
import { SuccessAllert } from './successAlert/success.component';
import { WarningAlert } from './warningAlert/warning.components';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PrimaryMenuComponent,
    SuccessAllert,
    WarningAlert
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
