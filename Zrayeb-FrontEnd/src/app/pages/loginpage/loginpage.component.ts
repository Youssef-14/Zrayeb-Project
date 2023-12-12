import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
  private apiUrl = 'http://localhost:8090/api/v1/auth';
  email: string =""
  password: string =""

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    var userDetails = {
      email: this.email,
      password: this.password,
    }

    this.http.post(`${this.apiUrl}/authenticate`, userDetails)
      .subscribe(
        (res: any) => {
          console.log(res);
          alert('Login successful');
          //store token and other details in localStorage
          localStorage.setItem('token', res.access_token);
          localStorage.setItem('refreshToken', res.refresh_token);
          //redirect to home page
          this.router.navigate(['/homepage']);

        },
        (err: any) => {
          console.log(err);
          alert('An error occurred while registering');
        }
      );
  }

}
