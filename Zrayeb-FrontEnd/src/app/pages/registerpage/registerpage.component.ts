import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  private apiUrl = 'http://localhost:8090/api/v1/auth';
    firstname: string = ""
    lastname: string =""
    email: string =""
    password: string =""
    number: string =""

  constructor(private http: HttpClient, private router: Router) {}

  registerUser() {
    var userDetails = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      number: this.number
    }


    this.http.post(`${this.apiUrl}/register`, userDetails)
      .subscribe(
        (res: any) => {
          if (res.success== false){
            alert('Registration failed');
            return;
          }
          console.log(res);
          alert('Registration successful');
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
