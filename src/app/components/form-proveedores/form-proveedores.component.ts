import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Proveedor } from 'src/app/core/models/proveedor';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';

@Component({
  selector: 'app-form-proveedores',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.scss']
})
export class FormProveedoresComponent {

  formulario : FormGroup = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength(3)]],
    empresa:['',[Validators.required]],
    contacto:['',[Validators.required]],
    telefono:['',[Validators.required]],
  })
  constructor( 
    private fb: FormBuilder,
    private provService: ProveedoresService)
  {}

  ngOnInit() {
   
  }


  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const nuevo: Proveedor = this.formulario.value;
    console.log('Formulario enviado', this.formulario.value);
    this.provService.postProveedor(nuevo);
    this.formulario.reset();
  }

  modificar(id:number){
    //this.provService.modificarProveedor()
  }

}
