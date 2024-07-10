import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

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
    },
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
    },
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
    },
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
    },
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
    },
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

  constructor() { }

  getProveedores(){
    return this.proveedores;
  }

  getProveedorId(id:number){
    return this.proveedores.find((m)=>{
      return m.id==id;
    })
  }

  postProveedor(nuevo:Proveedor){
    this.proveedores.push(nuevo);
  }

  modificarProveedor(nuevo:Proveedor){
    console.log("Modificar:",nuevo);
  }

}
