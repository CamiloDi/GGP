import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {

  sesion:any=sessionStorage;
  local:any=localStorage;
  constructor() { }

  ngOnInit() {
  }

}
