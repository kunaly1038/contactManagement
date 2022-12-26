import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IRegister } from 'src/app/models/IRegister';
import { IUser } from 'src/app/models/IUser';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  editUserDetails!: FormGroup;
  userId!: any;
  globalUserID!: any;
  saveUserData!: IUser;
  adminValue!: boolean;
  constructor(
    private _fb: FormBuilder,
    private _activateRouter: ActivatedRoute,
    private _userService: UserService,
    private _snackBar: SnackbarService,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this._activateRouter.params.subscribe((res) => {
      this.userId = res.id;
    });

    this.editUserDetails = this._fb.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
    this.getUserByID();
    this.populateUserData();
  }

  createFG(): FormGroup {
    return this._fb.group({});
  }

  getUserByID() {
    this._userService.getUserById(this.userId).subscribe((res) => {
      this._userService.userID.next(res);
    });
  }

  populateUserData() {
    this._userService.userID.subscribe((res) => {
      if (res) {
        this.editUserDetails.patchValue(res);
      }
    });
  }

  saveDetails() {
    this._authService.userDataValue.subscribe((res) => {
      this.globalUserID = res.user.id;
      this.adminValue = res.user.admin;
    });
    if (this.globalUserID == this.userId || this.adminValue == true) {
      this.saveUserData = {
        email: this.editUserDetails.value.email,
        firstName: this.editUserDetails.value.firstName,
        lastName: this.editUserDetails.value.lastName,
        password: 'kunal',
        admin: false,
      };
      this._userService
        .editUserData(this.saveUserData, this.userId)
        .subscribe();
      this._snackBar.success('User details saved.');
      this._router.navigate(['/user/landingPage']);
    }else{
      this._snackBar.error("You are not Admin.")
    }
  }
}
