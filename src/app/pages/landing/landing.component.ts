import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
