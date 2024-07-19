import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/product';
import { Proveedor } from 'src/app/core/models/proveedor';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';
import { capitalizeWords } from 'src/app/utils/utils';

@Component({
  selector: 'app-product-form',
  imports : [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnChanges, OnInit {
  private provService = inject(ProveedoresService);
  @Input() product: Product | null = null;
  @Output() save = new EventEmitter<Product>();
  proveedores: Proveedor[] = [];
  productForm: FormGroup;
  @Input() insideModal: boolean = false;
  errorMessage: String = '';


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      minStock: ['', [Validators.required]],
      supplier: ['', [Validators.required]],
    });
  }

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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product) {
      this.productForm.patchValue(this.product);
      this.productForm.get('supplier')?.setValue(this.product.providerId);
      //this.proveedores.find((proveedor)=>proveedor.id === this.product?.providerId);
    }
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productReq: Product = {
        name: capitalizeWords(this.productForm.value.name),
        price: this.productForm.value.price,
        description: "descripcion",
        unit: this.productForm.value.unit,
        stock: this.productForm.value.stock,
        minStock: this.productForm.value.minStock,
        providerId: this.productForm.value.supplier,
      };
      
      if (this.product) productReq.id = this.product.id;

      this.save.emit(productReq);
    }
  }

  isInsideModal(){
    return this.insideModal;
  }
}
