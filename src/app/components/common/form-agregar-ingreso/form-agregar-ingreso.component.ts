import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingreso } from 'src/app/core/models/ingreso';

@Component({
  selector: 'app-form-agregar-ingreso',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-agregar-ingreso.component.html',
  styleUrls: ['./form-agregar-ingreso.component.scss']
})
export class FormAgregarIngresoComponent {

  @Input() ingreso: Ingreso | null = null;
  @Output() save = new EventEmitter<Ingreso>();

  formulario: FormGroup;

  constructor( private fb: FormBuilder){

    this.formulario = this.fb.group({
      monto:['',[Validators.required]],
      fecha:['',[Validators.required]]
    });

  }

  onSubmit(){
    if(this.formulario.valid){
      const ingresoData: Ingreso = {
        ...this.ingreso,
        ...this.formulario.value
      }
      this.save.emit(this.formulario.value);
    }
  }


}
