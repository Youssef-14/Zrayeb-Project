import { Routes } from '@angular/router';

import {HomepageComponent} from "./pages/homepage/homepage.component";
import {LoginpageComponent} from "./pages/loginpage/loginpage.component";
import { AddBaladeComponent } from './pages/add-balade/add-balade.component';
import { RegisterpageComponent } from "./pages/registerpage/registerpage.component";
import { CalenderComponent } from "./pages/calender/calender.component";
import {ListebaladeComponent} from "./pages/listebalade/listebalade.component";
import {ListereservationComponent} from "./pages/listereservation/listereservation.component";
import {ReserverComponent} from "./pages/reserver/reserver.component";

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
    path: 'liste-balades',
    component: ListebaladeComponent,
  },
  {
    path: 'liste-reservations/:id',
    component: ListereservationComponent,
  },
  {
    path: 'add-reservation/:id',
    component: ReserverComponent,
  }
];
