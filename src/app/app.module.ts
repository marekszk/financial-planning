import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { AppRoutingModule, routing } from "app/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RevenuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    routing
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
