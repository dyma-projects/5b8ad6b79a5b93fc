import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { BehaviorSubject } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
  export class UserListComponent implements OnInit {
  public users: string[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userService.users.subscribe((users) => {
      console.log(users);
      this.userService.users.unsubscribe();
     
    })
    
  } 
}
