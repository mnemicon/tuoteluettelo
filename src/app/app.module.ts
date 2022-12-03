import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhonelistComponent } from './phonelist/phonelist.component';
import { AppRoutingModule } from './app-routing.module';

/* import { PhoneService } from './phone.service';  //LISÄTTY 03.
 */
@NgModule({
  declarations: [
    AppComponent,
    PhonelistComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
