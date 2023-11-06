import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => { // Specify the type of 'data' as 'User[]'
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }
}
