import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-reserver',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './reserver.component.html',
  styleUrl: './reserver.component.css'
})
export class ReserverComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  constructor(private http: HttpClient) {}

  submitForm(): void {
      // Get baladeId from URL
      const baladeId = window.location.pathname.split('/').pop();

      // Get userId from localStorage
      const userId = 306;

      // Prepare data for the API request
      const requestData = {
        balade: {
          id: baladeId
        },
        userId: userId
      };
      console.log(requestData);

      // Make API request
      this.http.post('http://localhost:8070/api/v1/activities/reservations/add', requestData)
        .subscribe(
          (response) => {

            // Handle success
            alert('Form submitted successfully!');
          },
          (error) => {
            // Handle error
            console.error('Error submitting form:', error);
          }
        );

  }

  resetForm(): void {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: ''
    };
  }

}
