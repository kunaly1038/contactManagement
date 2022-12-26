import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  error(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-error'],
      duration: 4000,
    });
  }

  success(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-success'],
      duration: 4000,
    });
  }

  info(message: string) {
    return this._snackBar.open(message, undefined, {
      panelClass: ['snackbar-info'],
      duration: 4000,
    });
  }
}
