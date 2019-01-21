import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GastosFijosComponent } from '../gastos-fijos/gastos-fijos.component';
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-detalle-gasto',
  templateUrl: './detalle-gasto.component.html',
  styleUrls: ['./detalle-gasto.component.css']
})
export class DetalleGastoComponent implements OnInit {
  gasto:any=this.data.gasto;
  readOnly:boolean =this.data.campos;

  constructor(public dialogRef: MatDialogRef<GastosFijosComponent>
    ,@Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
     if(!this.data.gasto){
       this.gasto=this.data.gasto;
     }
  }


  pagado(pagado) {
    if (pagado) {
      return 'Si';
    } else {
      return 'No';
    }
  }

  closeModal(): void {
    this.dialogRef.close();
    this.dialogRef=null;
  }

  edit(): void {
    this.readOnly=false;
  }

  save(forma:NgForm): void {
    console.log("ngForm:",forma);
    console.log("Value:",forma.value);
    this.readOnly=true;
  }
}
