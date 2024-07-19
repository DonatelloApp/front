import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Proveedor } from 'src/app/core/models/proveedor';
import { ProveedoresService } from 'src/app/core/services/proveedores.service';

@Component({
  selector: 'app-proveedor-info',
  standalone:true,
  templateUrl: './proveedorInfo.component.html',
  styleUrls: ['./proveedorInfo.component.scss']
})
export class ProveedorInfoComponent implements OnInit{
  private provService = inject(ProveedoresService);
  @Input() proveedorId: number | undefined;
  name: string | undefined = undefined;
  company: string | undefined = undefined;
  phone: number | undefined = undefined;
  proveedores: Proveedor[] = [];
  errorMessage: String = '';

  constructor() { }

  ngOnInit() {
    this.provService.getProveedores().subscribe({
      next: (userData) => {
        this.proveedores = userData;
        const proveedor: Proveedor | undefined = this.proveedores.find((proveedor)=>proveedor.id === this.proveedorId);
        this.name = proveedor?.name;
        this.company = proveedor?.company;
        this.phone = proveedor?.contact;
      },
      error: (errorData) => {
        this.errorMessage = errorData;
      },
      complete: () => {
        console.info('Suppliers loaded successfully');
      },
    });
  }

}
