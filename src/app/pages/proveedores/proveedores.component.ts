import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProveedoresService } from './../../core/services/proveedores.service'
import { Proveedor } from '../../core/models/proveedor'

@Component({
  selector: 'app-proveedores',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit{

  formulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    empresa:['',[Validators.required]],
    contacto:['',[Validators.required]],
    telefono:['',[Validators.required]],
  })

  proveedores:Proveedor[] = [
    {
      id:1,
      nombre:'aaa',
      empresa:'aaa',
      contacto:'11/11/2020',
      telefono:111
    },
    {
      id:2,
      nombre:'bbb',
      empresa:'bbb',
      contacto:'22/11/2020',
      telefono:222
    },
    {
      id:3,
      nombre:'ccc',
      empresa:'ccc',
      contacto:'1/12/2020',
      telefono:333
    }
  ]


  constructor( 
    private fb: FormBuilder,
    private provService: ProveedoresService)
  {}

  ngOnInit() {
    this.formulario.reset({
      nombre:'',
      empresa:'',
      contacto:'',
      telefono:''
    });
  }

  guardar(){
    if(this.formulario.invalid){
      this.formulario.markAllAsTouched();
      return;
    }

    console.log(this.formulario.value);
    this.formulario.reset();
  }

  modificar(id:number){
    console.log("Modificar Proveedor ",id);
  }

}
