import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  profile: any;
  saludo: string;
  cargando:boolean;

  
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    //console.log('esta authenticado?-session');
    //console.log(this.auth.isAuthenticated());
    setTimeout(()=>this.cargarPerfil(),1000);
  }
  cargarPerfil() {  
    if (this.auth.isAuthenticated()) {
      this.cargando=true;
      this.saludo = 'Hola ';
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
        //console.log(this.profile);
        this.cargando=false;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
          //console.log(this.profile);
          this.cargando=false;
        });
        
      }
    }
  }

  salir() {
    this.auth.logout();
    this.profile = null;
    this.saludo = '';
  }
  login() {
    this.auth.login();
    //this.cargando=true;
  }
  opciones() {
    alert('le diste click a opciones');
  }

}


