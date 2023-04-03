import { Route } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
