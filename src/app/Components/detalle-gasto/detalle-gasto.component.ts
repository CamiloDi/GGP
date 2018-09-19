import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { GastosFijosComponent } from '../gastos-fijos/gastos-fijos.component';
import { TabsComponent } from '../tabs/tabs.component';



@Component({
  selector: 'app-detalle-gasto',
  templateUrl: './detalle-gasto.component.html',
  styleUrls: ['./detalle-gasto.component.css']
})
export class DetalleGastoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TabsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    
  }

  closeModal(): void {
    this.dialogRef.close();
    this.dialogRef=null;
  }
}
