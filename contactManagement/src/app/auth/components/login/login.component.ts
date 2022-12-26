import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/models/ILogin';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _authService: AuthService,
    private _snackbar: SnackbarService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}
  userData!: ILogin;
  loginUserDetails!: FormGroup;

  ngOnInit(): void {
    this.loginUserDetails = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  verifyAndLoginUser() {
    this.userData = {
      email: this.loginUserDetails.value.email,
      password: this.loginUserDetails.value.password,
    };
    this._authService.loginUser(this.userData).subscribe((res) => {
      if (res.accessToken) {
        this._authService.userDataValue.next(res);
        this._snackbar.success('Login Successfull.');
        this._authService.saveToken('token', res.accessToken);
        this._router.navigate(['user']);
      }
    });
  }
}
