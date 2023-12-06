import { Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {LoginpageComponent} from "./pages/loginpage/loginpage.component";
import {RegisterpageComponent} from "./pages/registerpage/registerpage.component";

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  },
  {
    path: 'register',
    component: RegisterpageComponent,
  }
];
