import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { SnackbarService } from '../services/snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  adminValue!: boolean;
  constructor(
    private _authService: AuthService,
    private _snackbar: SnackbarService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this._authService.userDataValue.subscribe((res) => {
      this.adminValue = res.user.admin;
    });
    if (this.adminValue) {
      return true;
    } else {
      this._snackbar.error('You are not Admin.');
      return false;
    }
  }
}
