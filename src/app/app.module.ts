import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, RequestOptions} from '@angular/http';
import { HttpService } from './shared/http';
import { httpFactory } from './shared/http-factory';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { AppRoutingModule, routing } from './app-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { PlanningComponent } from './planning/planning.component';
import { CategoriesComponent } from './categories/categories.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomTableComponent } from './shared/custom-table/custom-table.component';
import { TableItemComponent } from './shared/custom-table/table-item/table-item.component';
import { TableHeadComponent } from './shared/custom-table/table-head/table-head.component';
import { TableBodyComponent } from './shared/custom-table/table-body/table-body.component';
import { TableItemAddComponent } from './shared/custom-table/table-item-add/table-item-add.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RevenuesComponent,
    ExpensesComponent,
    PlanningComponent,
    CategoriesComponent,
    HeaderComponent,
    CustomTableComponent,
    TableItemComponent,
    TableHeadComponent,
    TableBodyComponent,
    TableItemAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    routing,
    RouterModule
  ],
  providers: [
    {
        provide: HttpService,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
