import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private _userSerivce: UserService,
    private _router: Router,
    private _authService: AuthService,
    private _snackbar: SnackbarService
  ) {}
  displayData!: any;
  user!: any;
  ngOnInit(): void {
    this.displayAllUser();
  }

  displayAllUser() {
    this._userSerivce.getAllUsers().subscribe((res) => {
      this._userSerivce.userID.next(res);
      this.displayData = res;
    });
  }

  editUser(index: number) {
    this._router.navigate(['/user/edit/' + index]);
  }

  deleteUser(id: number) {
    let idValue!: any;
    this._userSerivce.userID.subscribe(this.user);
    this._authService.userDataValue.subscribe((res) => {
      idValue = res.user.id;

      if (idValue == id) {
        this._userSerivce.deleteUserById(id).subscribe();
        this._snackbar.error('Deleted User');
        this.displayAllUser();
      } else {
        this._snackbar.error("You don't have access");
      }
    });

    // this._userSerivce.
  }
}
