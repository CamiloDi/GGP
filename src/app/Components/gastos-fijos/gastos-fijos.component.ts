import { Component, OnInit } from '@angular/core';
import { GastosFijosService } from '../../services/gastosFijos.service';
import {MatDialog} from '@angular/material';
import { DetalleGastoComponent } from '../detalle-gasto/detalle-gasto.component';


@Component({
  selector: 'app-gastos-fijos',
  templateUrl: './gastos-fijos.component.html',
  styleUrls: ['./gastos-fijos.component.css']
})
export class GastosFijosComponent implements OnInit {

  dialogRef:any;
  fecha: Date = new Date();
  claseFila: string = 'table-danger';
  listaGastosFijos: any;
  constructor(private dataGastosFijos: GastosFijosService,
              private dialog: MatDialog
            ) { }

  ngOnInit() {
    this.dataGastosFijos.getLista().subscribe((data) => {
      this.listaGastosFijos = data.gastosfijos;
     
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
      this.listaGastosFijos=[];
    } else {
      ;
    }
  }
  //Boton detalle
  verDetalle(gasto){
    if(this.dialogRef==null){
    this.dialogRef = this.dialog.open(DetalleGastoComponent,{
      height:'100%',
      width: '90%',
      position: {
        left: '10%'
      },data:{
        gasto:gasto
      }     
    });}
    else{
        this.dialogRef.close();
        this.dialogRef = this.dialog.open(DetalleGastoComponent, {
          height:'100%',
          width: '90%',
          position: {
            left: '10%',
            top: '0%'
          },data:{
            gasto:gasto
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
  Editar(gasto){
    alert(gasto.id);
    
  }
  Borrar(gasto){
    //alert(gasto.id);
    let nuevoArreglo=[];
    let confirma = confirm('Esta seguro que desea eliminar el gasto: '+gasto.nombre+' ?');
    if (confirma) {
      this.listaGastosFijos.map((gastoBuscar,index)=>{
        if(gastoBuscar.id!=gasto.id){
          nuevoArreglo[index]=gastoBuscar
        }
      });
      this.listaGastosFijos=nuevoArreglo;
    } else {
      ;
    }
  }


  
}
