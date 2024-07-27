import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'medida',
  standalone: true
})
export class MedidaPipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    if(value == 'kg'){
      return 'gr';
    }else if( value ==='lt' ){
      return 'ml'
    }else{
      return 'un'
    }
  }

}
