import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './pages/landing/landing.component';
import { FinanzasComponent } from "./pages/dashboard/finanzas/finanzas.component";

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HttpClientModule,
    LandingComponent,
    FinanzasComponent
],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-yt';
}
