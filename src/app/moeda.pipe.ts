import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moeda'
})
export class MoedaPipe implements PipeTransform {

  transform(value: number): string {
    const valor = value.toFixed(2);
    const moeda = 'R$ ' +valor.replace('.',',');
    return moeda;
  }
}
