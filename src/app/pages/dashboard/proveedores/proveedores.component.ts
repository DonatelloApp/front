import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ProveedoresService } from '../../../core/services/proveedores.service';
import { Proveedor } from 'src/app/core/models/proveedor';
import { FormProveedoresComponent } from 'src/app/components/form-proveedores/form-proveedores.component';
import { ModalComponent } from 'src/app/components/common/modal/modal.component';
import { NavbarComponent } from '../../../components/layout/navbar/navbar.component';
import { SidebarComponent } from '../../../components/layout/sidebar/sidebar.component';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormProveedoresComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
})
export class ProveedoresComponent implements OnInit {
  private loginService = inject(LoginService);
  private provService = inject(ProveedoresService);
  userLoginOn: boolean = false;
  proveedores: Proveedor[] = [];
  selectedProveedor: Proveedor | null = null;
  navbarTitle = "Proveedores"
  errorMessage: String = '';

  constructor() {}

  ngOnInit() {
    this.provService.getProveedores().subscribe({
      next: (userData) => {
        this.proveedores = userData;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('Suppliers loaded successfully');
      },
    });
  }

  onEditProveedor(proveedor: Proveedor) {
    this.selectedProveedor = proveedor;
  }

  onNewProveedor() {
    this.selectedProveedor = null;
  }

  onSaveProveedor(proveedor: Proveedor) {
    if (proveedor.id) {
      this.provService.updateProveedor(proveedor).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Supplier successfully updated');
        },
      });
      this.selectedProveedor = null;
    } else {
      this.provService.addProveedor(proveedor).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Supplier successfully added');
        },
      });
      this.selectedProveedor = null;
    }
  }
}
