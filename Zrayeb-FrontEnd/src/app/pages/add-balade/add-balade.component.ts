import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-balade',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule, NgbDropdownModule],
  templateUrl: './add-balade.component.html',
  styleUrl: './add-balade.component.css'
})
export class AddBaladeComponent {
  faAdd = faAdd;

  months: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];

  years: number[] = [
    2023, 2024, 2025, 2026, 2027
  ];

  selectedMonth: string = 'Janvier';
  selectedYear: number = 2023;

  user: any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  };

  submitForm() {
  }

  resetForm() {
    this.user = {};
  }
}