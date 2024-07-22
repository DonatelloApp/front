import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-agregar-ingreso',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-agregar-ingreso.component.html',
  styleUrls: ['./form-agregar-ingreso.component.scss']
})
export class FormAgregarIngresoComponent {

  formulario: FormGroup;

  constructor( private fb: FormBuilder){

    this.formulario = this.fb.group({
      monto:['',[Validators.required]],
      fecha:['',[Validators.required]]
    });

  }

  onSubmit(){
    console.log(this.formulario.value);
  }


}
