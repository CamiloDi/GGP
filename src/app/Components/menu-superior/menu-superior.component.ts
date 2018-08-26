import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  public valida:any;
  
  constructor(public auth: AuthService) {
    //auth.handleAuthentication();
  }

  ngOnInit() {
    this.valida=(sessionStorage.sesionvalida=='true');
  }

}
