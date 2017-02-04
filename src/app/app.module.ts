import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { StudentsComponent } from './students/students.component';
import { ProfileComponent } from './students/profile.component';
import {ErrorGuardComponent} from './error.guard.component';
import {ErrorCanActivateGuard} from './error.canactivate.guard';

import {myRoutes} from './app.routes';
import {DbService} from './students/db.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    ProfileComponent,
    ErrorGuardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    myRoutes
  ],
  providers: [ErrorCanActivateGuard, DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
