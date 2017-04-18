import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { RevenuesComponent } from "app/revenues/revenues.component";
import { AddExpenseComponent } from "app/expenses/add-expense/add-expense.component";
import { ExpensesComponent } from "app/expenses/expenses.component";
import { CategoriesComponent } from "app/categories/categories.component";
import { PlanningComponent } from "app/planning/planning.component";
import { TemplatesComponent } from "app/templates/templates.component";


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'renevues', component: RevenuesComponent },
  { path: 'planning', component: PlanningComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'templates', component: TemplatesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, RevenuesComponent];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);