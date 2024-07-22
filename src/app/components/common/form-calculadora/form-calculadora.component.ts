import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/ingredient';
import { Product } from 'src/app/core/models/product';
import { CalculadoraService } from 'src/app/core/services/calculadora.service';
import { StockService } from 'src/app/core/services/stock.service';

@Component({
  selector: 'app-form-calculadora',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './form-calculadora.component.html',
  styleUrls: ['./form-calculadora.component.scss']
})
export class FormCalculadoraComponent implements OnInit{

  productos = [
    {
      "id":0,
      "name":"harina",
      "price":1700,
      "description":"harina de trigo 000",
      "unit":"gramos",
      "stock":6,
      "minStock":3,
      "providerId":3
    },
    {
      "id":1,
      "name":"muzzarella",
      "price":3700,
      "description":"muzzarella tipo italiana",
      "unit":"gramos",
      "stock":9,
      "minStock":4,
      "providerId":2
    }
  ]

  formulario: FormGroup;
  ingredientes : Product [] | null = null;
  productoElegido : Product | undefined = undefined;

  constructor( 
    private fb: FormBuilder,
    private ingredientsService: StockService,
    private calculadoraService: CalculadoraService ){

    this.formulario = this.fb.group({
      producto:['',[Validators.required]],
      ingrediente:['',[Validators.required]],
      cantidad:['',[Validators.required]],
      medida:['',[Validators.required]]
    });

  }

  ngOnInit(): void {
    /*this.ingredientsService.getProducts().subscribe({
      next: (data) =>{
        this.ingredientes = data;
      }
    });*/
    this.ingredientes = this.productos;

    this.formulario.get('ingrediente')?.valueChanges.subscribe( selectedId =>{
      this.productoElegido = this.ingredientes?.find( ingr => ingr.id === +selectedId )})
  }

  onSubmit(){
    if(this.formulario.valid){
      
      if(this.productoElegido){
        const ingrediente: Ingredient = {
          id: this.productoElegido.id,
          name: this.productoElegido.name,
          price: this.productoElegido.price,
          description: this.productoElegido.description,
          unit: this.productoElegido.unit,
          stock: this.productoElegido.stock,
          minStock: this.productoElegido.minStock,
          providerId: this.productoElegido.providerId,
          medida : this.formulario.get('medida')?.value,
          cantidad : this.formulario.get('cantidad')?.value,
          coste : 0 //se calcula en el servicio
        }
        this.calculadoraService.setTitle(this.formulario.get('producto')?.value);
        this.calculadoraService.agregarIngrediente(ingrediente);
        this.formulario.reset();  
      }

    }
  }

  

  

}
