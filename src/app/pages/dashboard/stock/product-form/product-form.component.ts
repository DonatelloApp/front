import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductTableComponent } from '../product-table/product-table.component';

@Component({
  selector: 'app-product-form',
  imports : [ReactiveFormsModule],
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productAdded = new EventEmitter<any>();
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      measure: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(0)]],
      minQuantity: ['', [Validators.required, Validators.min(0)]],
      supplier: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.productForm.valid) {
      this.productAdded.emit(this.productForm.value);
      this.productForm.reset();
    }
  }
}
