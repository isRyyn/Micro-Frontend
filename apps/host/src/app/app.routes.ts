import { AppComponent } from './app.component';
import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'user',
    loadChildren: () => import('user/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.RemoteEntryModule),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
];
