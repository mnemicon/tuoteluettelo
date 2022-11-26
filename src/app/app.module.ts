import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhonelistComponent } from './phonelist/phonelist.component';

import { PhoneService } from './phone.service';  //LISÄTTY 03.

@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
