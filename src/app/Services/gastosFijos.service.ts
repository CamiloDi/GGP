import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
//import{gastosFijos} from '../../assets/data/gastosFijos.json'

@Injectable()
export class GastosFijosService {
  gastosFijos:any;

  constructor(public http: HttpClient) {
    console.log('GastosFijos-Service is Ready!');
  }
     getLista(){
       this.gastosFijos=this.http.get('../../assets/data/gastosFijos.json');
        return this.gastosFijos;
     }
  }
