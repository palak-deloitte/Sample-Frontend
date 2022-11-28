import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerDashboardComponent } from './banner-dashboard/banner-dashboard.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component'; '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    NavbarComponent,
    BannerDashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
