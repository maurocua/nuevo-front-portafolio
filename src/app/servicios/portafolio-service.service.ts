import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PortafolioModel } from '../model/portafolio-model';

@Injectable({
  providedIn: 'root'
})
export class PortafolioServiceService {

  url="http://localhost:8080/";

  constructor(private http: HttpClient) { }

  ejecutarPortafolioService(){
    return this.http.get<PortafolioModel>(this.url);
  }
}
