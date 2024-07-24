import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { tipo, Transaction } from 'src/app/core/models/Transaction';
import { FinanzasService } from 'src/app/core/services/finanzas.service';

@Component({
  selector: 'app-form-agregar-ingreso',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-agregar-ingreso.component.html',
  styleUrls: ['./form-agregar-ingreso.component.scss']
})
export class FormAgregarIngresoComponent {

  formulario: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private financeService:FinanzasService
  ){

    this.formulario = this.fb.group({
      monto:['',[Validators.required, Validators.min(0.01) ]],
      fecha:[ this.getCurrentDate() ,[Validators.required]]
    });

  }

  onSubmit(){
    if(this.formulario.valid){
      const nuevoIngreso: Transaction = {
        type: tipo.ingreso,
        amount: this.formulario.value.monto,
        date: this.formulario.value.fecha
      };

      this.financeService.addTransaction(nuevoIngreso).subscribe({
        next: (response) =>{
          console.log('Nuevo ingreso exitoso', response);
          this.formulario.reset();
          // Restablecer la fecha con el valor predeterminado después de resetear el formulario
          this.formulario.patchValue({fecha : this.getCurrentDate() });
        },
        error: (error) =>{
          console.error('Error añadiendo el nuevo ingreso:', error)
        }
      });

    }
  }


  private getCurrentDate(): string{
    const today = new Date();
    return today.toISOString().split('T')[0]; //Formato 'YY-MM-DD' requerido por input[type="date"]
  }

}
