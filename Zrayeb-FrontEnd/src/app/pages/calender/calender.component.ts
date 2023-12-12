import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderchldrenComponent } from "../../components/calenderchldren/calenderchldren.component";
import { CalenderchldrenRComponent } from "../../components/calenderchldrenR/calenderchldrenR.component";
import { CalenderchldrenWComponent } from "../../components/calenderchldrenW/calenderchldrenW.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
@Component({
  selector: 'app-calender',
  standalone: true,
  imports: [CommonModule, CalenderchldrenComponent, CalenderchldrenRComponent, CalenderchldrenWComponent, NavbarComponent],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css'
})
export class CalenderComponent {

}
