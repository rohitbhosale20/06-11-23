import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user = { email: '', password: '', firstName: '', lastName: '' };

  constructor(private userService: UserService) { }

  ngOnInit(): void { }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      response => {
        console.log('User registered successfully', response);
      },
      error => {
        console.error('Error registering user', error);
      }
    );
  }
}
