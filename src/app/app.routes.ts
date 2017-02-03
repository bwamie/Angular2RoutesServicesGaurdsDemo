import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent} from './home.component';
import {StudentsComponent} from './students/students.component';
import {ProfileComponent} from './students/profile.component';

const MY_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'homepage', component: HomeComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'students/profile/:id', component: ProfileComponent}/*,

  {path: '**', redirectTo: '/'}*/
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);