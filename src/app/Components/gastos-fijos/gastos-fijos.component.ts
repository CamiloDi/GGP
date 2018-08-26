import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gastos-fijos',
  templateUrl: './gastos-fijos.component.html',
  styleUrls: ['./gastos-fijos.component.css']
})
export class GastosFijosComponent implements OnInit {

  fecha:Date=new Date();
  claseFila:string='table-danger';
  constructor() { }

  ngOnInit() {
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
