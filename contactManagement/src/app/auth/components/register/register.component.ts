import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/IRegister';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserDetails!: FormGroup;
  userData!: IRegister;
  constructor(
    private _router: Router,
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.registerUserDetails = this._fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  registerUser() {
    this.userData = {
      email: this.registerUserDetails.value.email,
      password: this.registerUserDetails.value.password,
      firstName: this.registerUserDetails.value.firstName,
      lastName : this.registerUserDetails.value.lastName,
      admin: false
    }

    this._authService.registerUser(this.userData).subscribe((res)=>{
      if(res.accessToken){
        this._snackBar.success("Registration Successfull.")
        this._router.navigate(['login']);
      }
    })
  }
}
