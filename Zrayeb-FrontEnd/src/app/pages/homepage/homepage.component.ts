import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
