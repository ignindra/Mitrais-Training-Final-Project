import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDashboardComponent } from './home-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/dashboard', pathMatch: 'full' },
  { path: 'home/dashboard', component: HomeDashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}