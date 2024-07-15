import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './pages/landing/landing.component';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { FinanzasComponent } from './pages/finanzas/finanzas.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ProveedoresComponent,
    FinanzasComponent,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    HttpClientModule,
    LandingComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-yt';
}
