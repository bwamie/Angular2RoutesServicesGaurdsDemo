import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";

import { DbService } from './students/db.service';

@Injectable()
export class ErrorCanActivateGuard implements CanActivate {

  constructor(private dbService: DbService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (route.params['id']) {
      if (this.dbService.getStudent(route.params['id'])) {
        return true;
      }
    }
    this.router.navigateByUrl('/error');
    return false;
    
  }
}
