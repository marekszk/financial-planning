import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { RevenuesComponent } from "app/revenues/revenues.component";


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'renevues', component: RevenuesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DashboardComponent, RevenuesComponent];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);