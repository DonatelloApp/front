import { Component, inject, OnInit } from '@angular/core';
import { ProductFormComponent } from 'src/app/components/specific/product-form/product-form.component';
import { NavbarComponent } from 'src/app/components/layout/navbar/navbar.component';
import { SidebarComponent } from 'src/app/components/layout/sidebar/sidebar.component';
import { ProveedoresComponent } from '../proveedores/proveedores.component';
import { LoginService } from 'src/app/core/services/login.service';
import { StockService } from 'src/app/core/services/stock.service';
import { Product } from 'src/app/core/models/product';
import { ModalComponent } from 'src/app/components/common/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProveedorInfoComponent } from 'src/app/components/specific/proveedorInfo/proveedorInfo.component';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [
    CommonModule,
    ProductFormComponent,
    ProveedorInfoComponent,
    NavbarComponent,
    SidebarComponent,
    ModalComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  private loginService = inject(LoginService);
  private prodService = inject(StockService);
  userLoginOn: boolean = false;
  products: Product[] = [];
  selectedProduct: Product | null = null;
  selectedProveedor: number | null = null;
  errorMessage: String = '';

  constructor() {}

  ngOnInit(): void {
    this.prodService.getProducts().subscribe({
      next: (userData) => {
        this.products = userData;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('Products loaded successfully');
      },
    });
  }

  onEditProduct(product: Product) {
    this.selectedProduct = product;
  }

  onSeeProvedor(proveedorId: number) {
    this.selectedProveedor = proveedorId;
  }

  onNewProduct() {
    this.selectedProduct = null;
  }

  onSaveProduct(product: Product) {
    if (product.id) {
      this.prodService.updateProduct(product).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Product successfully updated');
        },
      });
      this.selectedProduct = null;
    } else {
      this.prodService.addProduct(product).subscribe({
        error: (errorData) => {
          this.errorMessage = errorData;
        },
        complete: () => {
          console.info('Product successfully added');
        },
      });
      this.selectedProduct = null;
    }
  }
}
