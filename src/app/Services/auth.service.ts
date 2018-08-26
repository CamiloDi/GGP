import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {
  public userProfile: any;
  public pregunta:number=0;

  auth0 = new auth0.WebAuth({
    clientID: 'NmHj8xfpJJzz0GHbNccrytqDQcj22n2Q',
    domain: 'cursoudemydevelop.auth0.com',
    responseType: 'token id_token',
    audience: 'https://cursoudemydevelop.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {}



  public login(): void {
    this.auth0.authorize();
    
    
  }
  
  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      //console.log('authResult');
      //console.log(authResult);
      
      if (authResult&& authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/gastofijos']);
      } else if (err) {
        this.router.navigate(['/gastofijos']);
        console.error(`Error: ${err.error}`);
      }
    });
  }
  /*
  public handleAuthentication(): void {
    this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        console.log('llegue al nuevo metodo');
        window.location.hash = '';
        sessionStorage.setItem('access_token', authResult.accessToken);
        sessionStorage.setItem('id_token', authResult.idToken);
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        sessionStorage.setItem('expires_at', expiresAt);
        sessionStorage.setItem('sesionvalida', 'true');
        this.router.navigate(['/gastofijos']);
      } else if (err && err != null) {
        console.error('Error: ' + err);
      }
    });
  }*/


  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    sessionStorage.setItem('access_token', authResult.accessToken);
    sessionStorage.setItem('id_token', authResult.idToken);
    sessionStorage.setItem('expires_at', expiresAt);
    
  }

  public logout(): void {
    // Remove tokens and expiry time from sessionStorage
    sessionStorage.removeItem('access_token');
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    sessionStorage.removeItem('sesionvalida');
    //sessionStorage.clear();
    // Go back to the home route
    this.router.navigate(['/']);
    
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(sessionStorage.getItem('expires_at') || '{}');
   /* if(this.pregunta==0){
      console.log('esta logueado?-isAuthenticated-service');
      console.log(new Date().getTime() < expiresAt);
      this.pregunta++;
    }*/
    
    return new Date().getTime() < expiresAt;
  }

  public getProfile(cb): void {
    const accessToken = sessionStorage.getItem('access_token');
    if (!accessToken) {

      throw new Error('Access Token must exist to fetch profile');
    }
  
    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }


}