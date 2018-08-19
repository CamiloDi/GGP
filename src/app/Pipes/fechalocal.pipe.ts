import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({name: 'fechalocal'})
export class FechaLocalPipe implements PipeTransform {
  constructor(){}
  transform(value: string, locale: string, pattern: string): string {

    return this.mayus(new DatePipe(locale).transform(value, pattern));


  }

  mayus(fecha:string){
    fecha=fecha.toLowerCase();

    let palabras = fecha.split(" ");
   
        palabras[0] =palabras[0][0].toUpperCase()+palabras[0].substr(1);
      


    return palabras.join(" ");
  }
}