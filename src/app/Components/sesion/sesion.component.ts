import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {

  profile: any;

  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      console.log(this.profile);

    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile);
      });
    }
    

  }

  salir() {
    this.auth.logout();
  }
  login() {
    this.auth.login();
  }


}


