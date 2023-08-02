import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  name: any;
  email: any;
  id: any;
  password: any;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    const userData = {
      name: this.name,
      email: this.email,
      id: this.id,
      password: this.password,
    };

    this.http.post('http://localhost:3000/users', userData).subscribe(
      (response) => {
        console.log('Signup successful!');
      },
      (error) => {
        console.error('Signup failed:', error);
      }
    );
  }
}
