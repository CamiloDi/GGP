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

  Pagar(gasto){
    var el = (document.getElementById(gasto.id+'')) as HTMLTableRowElement;
    console.log(el);
    gasto.pagado=true;
  }

  PagarTodo(Gastos){
    Gastos.forEach(gasto => {
      gasto.pagado=true;
    });
  }
  clasePagado(pagado){
    if(pagado){
      return 'table-success';
    }else{
      return 'table-danger';
    }
  }
    claseDesabilitado(pagado){
      if(pagado){
      return 'dropdown-item disabled';
    }else{
      return 'dropdown-item';
    }

    }

  

}
