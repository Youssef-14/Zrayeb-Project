import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-add-balade',
  standalone: true,
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './add-balade.component.html',
  styleUrl: './add-balade.component.css'
})
export class AddBaladeComponent {

}
