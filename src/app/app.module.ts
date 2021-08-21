import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteNavbarComponent } from './qoute-navbar/qoute-navbar.component';
import { QouteListComponent } from './qoute-list/qoute-list.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteNavbarComponent,
    QouteListComponent,
    QouteDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
