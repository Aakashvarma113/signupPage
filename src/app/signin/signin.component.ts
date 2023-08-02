import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
})
export class SigninComponent {
  email: any;
  password: any;

  constructor(private http: HttpClient,
              private router: Router) {}

  onSubmit(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:3000/login', loginData).subscribe(
      (response) => {
        console.log('Login successful!');
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
  onSignIn(): void {
    const loginData = {
      email: this.email,
      password: this.password,
    };

    this.http.post('http://localhost:3000/users/login', loginData).subscribe(
      (response) => {
        if (response) {
          // User successfully logged in, save user information to local storage
          localStorage.setItem('currentUser', JSON.stringify(response));

          // Navigate to the personal dashboard
          this.router.navigate(['/dashboard']);
        } else {
          // Handle login error (e.g., show an error message)
        }
      },
      (error) => {
        // Handle login error (e.g., show an error message)
      }
    );
  }
}
