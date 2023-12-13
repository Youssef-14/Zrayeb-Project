// balade-list.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

interface Balade {
  id: number;
  prix: number;
  date: string;
  reservation: []
}


@Component({
  selector: 'app-listebalade',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent],
  templateUrl: './listebalade.component.html',
  styleUrl: './listebalade.component.css'
})
export class ListebaladeComponent {
  balades: Balade[] = [];
  showBaladeForm = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchBalades();
  }

  fetchBalades(): void {
    // Fetch data from the API
    this.http.get<Balade[]>('http://localhost:8070/api/v1/activities/all')
      .subscribe(data => {
        this.balades = data;
        console.log(data);
      });
  }

  showForm(): void {
    // redirect to add-balade page url
    window.location.href = 'http://localhost:4200/add-balade';
  }

  hideForm(): void {
    this.showBaladeForm = false;
  }

  editBalade(balade: Balade): void {
    // Add logic to handle editing of a balade
    // You can open a modal or navigate to an edit page
    console.log('Edit:', balade);
  }

  deleteBalade(balade: Balade): void {
    // Add logic to handle deleting a balade
    // For a dynamic example, you can send a DELETE request to the API
    this.http.delete(`http://localhost:8070/api/v1/activities/delete/${balade.id}`)
      .subscribe(() => {
        this.fetchBalades(); // Update the table after deleting a balade
      });
  }

  reserveBalade(balade: Balade): void {
    // Add logic to handle deleting a balade
    // For a dynamic example, you can send a DELETE request to the API
    window.location.href = `http://localhost:4200/add-reservation/${balade.id}`;
  }

}
