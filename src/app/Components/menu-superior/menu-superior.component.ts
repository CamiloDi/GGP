import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  
  constructor(private auth: AuthService) {
    
  }

  ngOnInit() {
    if (!sessionStorage.sesionvalida) {
      this.auth.login();
    }
    
    
  }

}
