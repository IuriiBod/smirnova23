import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroesComponent }      from './components/heroes/heroes.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { HomeComponent } from './components/home/home.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { InformationComponent } from './components/information/information.component';
import { DocsComponent } from './components/docs/docs.component';
import { ContactComponent } from './components/contacts/contacts.component';
import { LoginComponent } from './components/login/login.component';

import { AdminPageComponent } from './components/adminPage/adminpage.component';
import { AdminHomeComponent } from './components/adminHome/adminhome.component';
import { AdminAccountingComponent } from './components/AdminAccounting/adminaccounting.component';

import { AuthGuard } from './guard/guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'accounting',
    component: AccountingComponent
  },
  {
    path: 'information',
    component: InformationComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminpage',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'accounting',
        component: AdminAccountingComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
