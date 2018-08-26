import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public valida:any;


  constructor() {
    //this.valida=(sessionStorage.sesionvalida=='true');
   }
}
