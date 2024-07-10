import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProveedoresService } from './../../core/services/proveedores.service'
import { Proveedor } from 'src/app/core/models/proveedor';
import { FormProveedoresComponent } from 'src/app/components/form-proveedores/form-proveedores.component';

@Component({
  selector: 'app-proveedores',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormProveedoresComponent],
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

  proveedores:Proveedor[]=[];


  constructor( 
    private fb: FormBuilder,
    private provService: ProveedoresService)
  {}

  ngOnInit() {
   this.proveedores = this.provService.getProveedores();
  }

}
