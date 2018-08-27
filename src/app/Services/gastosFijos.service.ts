import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
//import{gastosFijos} from '../../assets/data/gastosFijos.json'

@Injectable()
export class GastosFijosService {
  gastos:any;

  constructor(public http: HttpClient) {
    console.log('GastosFijos-Service is Ready!');
  }
     getLista() {
        return this.http.get('../../assets/data/gastosFijos.json');
    }).catch(
        (error: Response) => {
        return Observable.throw(error);
    });
