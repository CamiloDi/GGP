import { Component, OnInit } from '@angular/core';
import { GastosFijosService } from '../../services/gastosFijos.service';
import { MatDialog } from '@angular/material';
import { DetalleGastoComponent } from '../detalle-gasto/detalle-gasto.component';


@Component({
  selector: 'app-gastos-fijos',
  templateUrl: './gastos-fijos.component.html',
  styleUrls: ['./gastos-fijos.component.css']
})
export class GastosFijosComponent implements OnInit {

  dialogRef: any;
  confDialog:any={height: '60%', width: '60%', position: { left: '25%',top:'10%' }};
  fecha: Date = new Date();
  claseFila: string = 'table-danger';
  listaGastosFijos: any;
  cantGastos:number=0;
  constructor(private dataGastosFijos: GastosFijosService,
              private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.dataGastosFijos.getLista().subscribe((data) => {
      this.listaGastosFijos = data.gastosfijos;
      this.cantGastos=data.gastosfijos.length;
    });
  }


  //Validaciones
  clasePagado(pagado) {
    if (pagado) {
      return 'table-success';
    } else {
      return 'table-danger';
    }
  }
  //DropDown Titulo
  PagarTodo(Gastos) {
    Gastos.forEach(gasto => {
      gasto.pagado = true;
    });
  }
  BorrarTodo() {
    let confirma = confirm('Esta seguro que desea eliminar todo?');
    if (confirma) {
      this.listaGastosFijos = [];
    } else {
      ;
    }
  }
  //Boton detalle
  verDetalle(gasto) {
    if (this.dialogRef == null) {
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        }, data: {
          gasto: gasto,
          campos:true
        }
      });
    }
    else {
      this.dialogRef.close();
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        }, data: {
          gasto: gasto,
          campos:true
        }
      });
    }
  }
  //DropDown Acciones
  Pagar(gasto) {
    if (!gasto.pagado) {
      var el = (document.getElementById(gasto.id + '')) as HTMLTableRowElement;
      gasto.pagado = true;
    } else {
      alert('El gasto: ' + gasto.nombre + ' ya esta pagado.');
    }
  }
  Editar(gasto) {
    if (this.dialogRef == null) {
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        }, data: {
          gasto: gasto,
          campos:false
        }
      });
    }
    else {
      this.dialogRef.close();
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        }, data: {
          gasto: gasto,
          campos:false
        }
      });
    }

  }
  Borrar(gasto) {
    //alert(gasto.id);
    let nuevoArreglo = [];
    let confirma = confirm('Esta seguro que desea eliminar el gasto: ' + gasto.nombre + ' ?');
    if (confirma) {
      this.listaGastosFijos.map((gastoBuscar, index) => {
        if (gastoBuscar.id != gasto.id) {
          nuevoArreglo[index] = gastoBuscar
        }
      });
      this.listaGastosFijos = nuevoArreglo;
    } else {
      ;
    }
  }
  //boton agregar gasto
  agregarGasto():void {
    if (this.dialogRef == null) {
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        },
        data: {
          gasto:{
            fecha: "",
            id: 0,
            nombre: "",
            pagado: false,
            valor: ""
          },
          campos:false

        }
      });
    }
    else {
      this.dialogRef.close();
      this.dialogRef = this.dialog.open(DetalleGastoComponent, {
        height: '60%',
        width: '60%',
        position: {
          left: '25%',
          top:'10%'
        },
         data: {
          gasto:{
            fecha: "",
            id: 0,
            nombre: "",
            pagado: false,
            valor: ""
          },
          campos:false

        }
      });
  }
  }

}
