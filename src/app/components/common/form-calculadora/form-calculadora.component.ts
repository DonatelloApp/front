import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-calculadora',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.scss']
})
export class FormCalculadoraComponent {

  formulario: FormGroup;

  constructor( private fb: FormBuilder ){

    this.formulario = this.fb.group({
      producto:[],
      ingrediente:[],
      cantidad:[],
      medida:[]
    });

  }

  onSubmit(){
    console.log(this.formulario.value);
  }

}
