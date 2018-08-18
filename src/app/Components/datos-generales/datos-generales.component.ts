import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.component.html',
  styleUrls: ['./datos-generales.component.css']
})
export class DatosGeneralesComponent implements OnInit {
  today: number = Date.now();
  
  constructor() { }

  ngOnInit() {
  }

}
