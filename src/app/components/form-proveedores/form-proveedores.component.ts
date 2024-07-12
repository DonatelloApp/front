import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/core/models/proveedor';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';

@Component({
  selector: 'app-form-proveedores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.scss']
})
export class FormProveedoresComponent implements OnChanges {

  @Input() proveedor: Proveedor | null = null;
  @Output() save = new EventEmitter<Proveedor>();

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      empresa: ['', [Validators.required]],
      contacto: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    
    if (changes['proveedor'] && this.proveedor) {
      this.formulario.patchValue(this.proveedor);
    }
  }

  onSubmit() {
    if (this.formulario.valid) {

      const proveedorData: Proveedor = {
        ...this.proveedor,
        ...this.formulario.value
      }

      this.save.emit(this.formulario.value);
    }
  }

}
