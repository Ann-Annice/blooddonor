import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlooddonorComponent } from './blooddonor/blooddonor.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';
import { DeletedonorComponent } from './deletedonor/deletedonor.component';

@NgModule({
  declarations: [
    AppComponent,
    BlooddonorComponent,
    SearchdonorComponent,
    DeletedonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
