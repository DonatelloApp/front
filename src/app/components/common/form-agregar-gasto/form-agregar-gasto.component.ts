import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-agregar-gasto',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './form-agregar-gasto.component.html',
  styleUrls: ['./form-agregar-gasto.component.scss']
})
export class FormAgregarGastoComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      monto: [0, [Validators.required]],
      motivo: [null, [Validators.required]],
      fecha: [null, [Validators.required]],
      descripcion: ['', [Validators.required]]
    })
  }


  onSubmit() { }
}
