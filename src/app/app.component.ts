import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    ProveedoresComponent,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    HttpClientModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'auth-yt';
}
