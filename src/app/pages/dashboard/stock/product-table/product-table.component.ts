import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-table',
  standalone: true,
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {
  @Input() products: any[] = [];
}
