import { Routes } from "@angular/router";

import { LayoutComponent } from "./core/layout/layout.component";
import { LoginComponent } from "./core/login/login.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { DashboardComponent } from "./home/home/dashboard/dashboard.component";
import { HomeComponent } from "./home/home/home.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { TransactionsListComponent } from "./transactions/transactions-list/transactions-list.component";

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'transactions', component: TransactionsListComponent },
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
]
