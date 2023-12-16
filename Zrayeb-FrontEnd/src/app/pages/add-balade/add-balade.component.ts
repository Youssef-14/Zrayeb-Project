// Import necessary modules and services
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-balade',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-balade.component.html',
  styleUrl: './add-balade.component.css'
})
export class AddBaladeComponent {
  user = {
    date: '',
    prix: ''
  };

  constructor(private http: HttpClient) {}

  submitForm(isValid: boolean | null): void {
    if (isValid) {
      // Prepare data for submission
      const formData = {
        date: this.user.date,
        prix: this.user.prix
        // No need to add other fields since the form only includes date and prix
      };

      // Make a POST request to the backend API
      this.http.post('http://localhost:8070/api/v1/activities/add', formData)
        .subscribe(
          (response: any) => {
            // Handle successful response
            alert('Form submitted successfully!');
            window.location.href = 'http://localhost:4200/liste-balades';
          },
          (error: any) => {
            // Handle error response
            alert('Form submission failed.');
            console.error(error);
          }
        );
    }
  }

  resetForm(): void {
    this.user = {
      date: '',
      prix: ''
    };
  }
}
