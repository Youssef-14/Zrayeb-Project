import { Routes } from '@angular/router';

import { HomepageComponent } from "./pages/homepage/homepage.component";
import { LoginpageComponent } from "./pages/loginpage/loginpage.component";
import { AddBaladeComponent } from './pages/add-balade/add-balade.component';
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { CalenderComponent } from "./pages/calender/calender.component";
import { ListComponent } from "./pages/list/list.component"
import { ErrorComponent } from "./error/error.component"
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
    path: 'add-balade',
    component: AddBaladeComponent,
  },
  {
    path: 'register',
    component: RegisterpageComponent,
  },
  {
    path: 'calender',
    component: CalenderComponent,
  },
  {
    path: 'listcrud',
    component: ListComponent,
  },
  {
    path: 'a',
    component: ErrorComponent
  }
];
