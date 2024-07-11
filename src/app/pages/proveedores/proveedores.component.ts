import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProveedoresService } from './../../core/services/proveedores.service'
import { Proveedor } from 'src/app/core/models/proveedor';
import { FormProveedoresComponent } from 'src/app/components/form-proveedores/form-proveedores.component';
import { ModalComponent } from 'src/app/components/common/modal/modal.component';

@Component({
  selector: 'app-proveedores',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule,FormProveedoresComponent,ModalComponent],
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit{

  proveedores:Proveedor[]=[];
 
  @ViewChild('formProveedores') formProveedores!: FormProveedoresComponent;

  constructor(private provService: ProveedoresService) {}

  ngOnInit() {
    this.proveedores = this.provService.getProveedores();
  }

  onSubmit() {
    this.formProveedores.guardar();
    console.log('Submit emitido');
  }
  
}
