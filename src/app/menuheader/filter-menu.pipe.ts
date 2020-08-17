import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {

  transform(value: any, arg: string): any {
    let resultado = []
    for(const elemento of value){
      if(elemento.sku){
        elemento.sku.toString();
        elemento.idProducto.toString();
        
      }
      console.log('===========================ESTOS SON LOS ELEMENTOS QUE QUIERES===============================================');
      console.log(elemento.sku, elemento.nombre, elemento.modelo, elemento.idProducto, elemento.clasificacion);
      if(elemento.clasificacion.toLowerCase().indexOf(arg.toLowerCase()) > -1 || elemento.categoria.toLowerCase().indexOf(arg.toLowerCase()) > -1 || elemento.idProducto.toString().indexOf(arg) > -1 || elemento.sku.toString().indexOf(arg) > -1 || elemento.nombre.toLowerCase().indexOf(arg.toLowerCase())> -1){
         resultado.push(elemento)
         console.log(resultado);
      }
      

    }
    return resultado
  }

}
