import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
  selectedProveedor: Proveedor | null = null;
 

  constructor(private provService: ProveedoresService) {}

  ngOnInit() {
    this.loadProveedores();
  }

  loadProveedores(){
    this.proveedores = this.provService.getProveedores();
  }

  onEditProveedor( proveedor: Proveedor){
    this.selectedProveedor = proveedor;
  }

  onNewProveedor(){
    this.selectedProveedor = null;
  }

  onSaveProveedor(proveedor : Proveedor){
    if(proveedor.id){
      this.provService.modificarProveedor(proveedor);
      this.loadProveedores();
      this.selectedProveedor=null;
    
    }else{
      this.provService.postProveedor(proveedor);
      this.loadProveedores();
      this.selectedProveedor=null;
    }
  }
  
}
