import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080'; // Replace with your Spring Boot API URL

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post(this.baseUrl + '/process_register', user);
  }

  getUsers() {
    return this.http.get(this.baseUrl + '/users');
  }
}
