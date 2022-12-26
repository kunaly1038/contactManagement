import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent implements OnInit {
  constructor(
    private _activatedRouter: ActivatedRoute,
    private _userService: UserService
  ) {}

  userId!: any;
  displayData!: any;
  ngOnInit(): void {
    this._activatedRouter.params.subscribe((res) => {
      this.userId = res.id;
    });

    this._userService.getUserById(this.userId).subscribe((res) => {
      this.displayData = res;
    });
  }
}
