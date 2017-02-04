import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './students/profile.component';
import { ErrorGuardComponent } from './error.guard.component';
import { ErrorCanActivateGuard } from './error.canactivate.guard';
import { DbService } from './students/db.service';

const MY_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homepage', component: HomeComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/profile/:id', component: ProfileComponent, canActivate: [ErrorCanActivateGuard]},
  { path: 'error', component: ErrorGuardComponent },
  /* {path: 'students/profile', component: ErrorGuardComponent, canActivate:[ErrorCanActivateGuard]},*/

  { path: '**', redirectTo: 'error' }
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);