import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { StockComponent } from './stock.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductTableComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockComponent
  ]
})
export class StockModule { }
