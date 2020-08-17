import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oracionMayusculas'
})
export class OracionMayusculasPipe implements PipeTransform {

  transform(value: any): any {
    var statement = value.toLowerCase();
    var c = value.slice(0, 1).toUpperCase();
    var d = value.slice(1).toLowerCase();
    
    return c + d;
  }

}
