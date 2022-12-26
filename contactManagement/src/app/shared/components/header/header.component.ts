import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this.getUsername();
  }

  username!: string;

  getUsername() {
    this._authService.userDataValue.subscribe((res) => {
      this.username = res.user.firstName + ' ' + res.user.lastName;
    });
  }

  logoutUser() {
    this._authService.removeToken('token');
    this._router.navigate(['auth']);
  }
}
