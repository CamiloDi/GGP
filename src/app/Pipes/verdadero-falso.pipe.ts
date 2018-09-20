import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verdaderoFalso'
})
export class VerdaderoFalsoPipe implements PipeTransform {

  transform(bool: boolean): any {
    if(bool==true){
      return 'Si';
    }else{
      return 'No';
    }
  }

}
