import { Component, OnInit } from '@angular/core';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  allUsers: any = [];

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this.getAllUsersInfo();
  }
  getAllUsersInfo() {
    //Using UserService to get Users List From the API
    this._service.getAllUsers().subscribe(res => {
      this.allUsers = res;
    }, // Handling the error here
      err => {
        console.error('an error ocurred', err)
      });
  }
}
