import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any = [];
  username: string = '';
  searchTextChanged: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _service: UserService) { }

  ngOnInit(): void {

    // Handling the Typing Debounce
    this.searchTextChanged
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((username: string) => this._service.getSingleUser(username))
      )  //using UserService to get Single User Data From API
      .subscribe(res => {
        this.user = [res];
        this.searchTextChanged.emit(this.username);
        console.log(this.user);
      }, // Handling the error here
        err => {
          console.error('ann error ocuured', err)
          alert("User Not Found")
        });
  }

  getUserInfo() {
    this.searchTextChanged.next(this.username);
  }

  
}
