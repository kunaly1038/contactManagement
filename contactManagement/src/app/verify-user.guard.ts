import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class VerifyUserGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this._authService.getTokenByName('token')) {
      this._router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }
}
