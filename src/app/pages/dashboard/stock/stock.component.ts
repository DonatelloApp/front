import { Component } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';


@Component({
  selector: 'app-stock',
  standalone: true,
  imports:  [ProductFormComponent,ProductTableComponent],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {
  products: any[] = [];

  addProduct(product: any) {
    this.products.push(product);
  }
}
