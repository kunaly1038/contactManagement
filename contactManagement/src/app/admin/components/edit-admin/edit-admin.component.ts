import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.scss']
})
export class EditAdminComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    this._authService.userDataValue.subscribe((res)=>{
    })
  }

}
