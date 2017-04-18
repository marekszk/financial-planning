import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { AppRoutingModule, routing } from "app/app-routing.module";
import { ExpensesComponent } from './expenses/expenses.component';
import { AddExpenseComponent } from './expenses/add-expense/add-expense.component';
import { PlanningComponent } from './planning/planning.component';
import { CategoriesComponent } from './categories/categories.component';
import { TemplatesComponent } from './templates/templates.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RevenuesComponent,
    ExpensesComponent,
    AddExpenseComponent,
    PlanningComponent,
    CategoriesComponent,
    TemplatesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    routing,
    RouterModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
