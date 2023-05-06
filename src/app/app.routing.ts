import { Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { LayoutComponent } from "./core/layout/layout.component";
import { LoginComponent } from "./core/login/login.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { UserProfileComponent } from "./user/user-profile/user-profile.component";
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";

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
    ],
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
]
