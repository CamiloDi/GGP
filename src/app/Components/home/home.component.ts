import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public valida:any;

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
    
   }

  ngOnInit() {
    
    this.valida=(sessionStorage.sesionvalida=='true');
    //console.log('esta autenticado?-home');
    //console.log(this.auth.isAuthenticated());
  if (!this.valida) {
    //sessionStorage.clear();  
    //this.auth.login();
    }
     
  }
  

}
