import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { ImprintComponent } from './imprint';
import { PageNotFoundComponent } from './page-not-found';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // This wildcard match has to come at last.
  { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
