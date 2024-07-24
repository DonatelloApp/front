import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tipo, Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';

@Component({
  selector: 'app-form-agregar-gasto',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './form-agregar-gasto.component.html',
  styleUrls: ['./form-agregar-gasto.component.scss']
})
export class FormAgregarGastoComponent {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private finanzasService:FinanzasService
  ){

    this.formulario = this.fb.group({
      monto: [0, [Validators.required]],
      fecha: [ this.getCurrentDate() , [Validators.required]],
      //motivo: [null, [Validators.required]],
      //descripcion: ['', [Validators.required]]
    })
  }


  onSubmit() { 
    if( this.formulario.valid){
      const nuevoGasto: Transaction = {
        type: tipo.gasto,
        amount: this.formulario.value.monto,
        date: this.formulario.value.fecha
      };

      this.finanzasService.addTransaction(nuevoGasto).subscribe({
        next:( response )=> {
          console.log('Nuevo gasto exitoso',response);
          this.formulario.reset();
          this.formulario.patchValue({fecha : this.getCurrentDate() });
        },
        error: (error)=> {
          console.log('Error añadiendo el nuevo gasto', error);
        }
      });

    }
  }

  private getCurrentDate(): string{
    const today = new Date();
    return today.toISOString().split('T')[0]; 
  }
}
