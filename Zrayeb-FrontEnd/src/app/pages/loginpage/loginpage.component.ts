import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {

}
