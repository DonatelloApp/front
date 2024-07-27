import { Component } from '@angular/core';
import { FooterComponent } from 'src/app/components/layout/footer/footer.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

}
