import { Component, OnInit } from '@angular/core';
import { GastosFijosService } from '../../services/gastosFijos.service';
@Component({
  selector: 'app-gastos-fijos',
  templateUrl: './gastos-fijos.component.html',
  styleUrls: ['./gastos-fijos.component.css']
})
export class GastosFijosComponent implements OnInit {

  fecha:Date=new Date();
  claseFila:string='table-danger';
  listaGastosFijos:any;
  constructor(private dataGastosFijos:GastosFijosService) { }

  ngOnInit() {
    this.dataGastosFijos.getLista().subscribe((data)=>
    {  
         this.listaGastosFijos=data.gastosfijos;
         console.log(this.listaGastosFijos[0]);
    });
  }

  Pagar(variable){
    var el = (document.getElementById('fila1')) as HTMLTableRowElement;
    console.log(variable);
    el.className='table-success';
    //this.claseFila='table-success';
  }

  PagarTodo(){
      this.claseFila='table-success';

  }

}
