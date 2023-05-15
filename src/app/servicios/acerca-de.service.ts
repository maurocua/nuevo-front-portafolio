import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, switchMap } from 'rxjs';
import { PortafolioServiceService } from './portafolio-service.service';
import { PortafolioModel } from '../model/portafolio-model';
import { AuthService } from './login/auth.service';

@Injectable({
  providedIn: 'root'
})

//NO USAR!!!!
export class AcercaDeService {

  datosNuevos: PortafolioModel | undefined;

  constructor(private http: HttpClient,
    private portafolioService: PortafolioServiceService,
    private authenticationService:AuthService) { }

   editarAcercaDe(acercaDe: string, password:any): Observable<any> {
        this.portafolioService.ejecutarPortafolioService().subscribe((datosAntes: PortafolioModel) => {
          datosAntes.acerca_de=acercaDe;
          this.datosNuevos=datosAntes;
        });
        return this.http.put<string>("http://localhost:8080/editar",this.datosNuevos,
        { headers: { authorization: this.authenticationService.createBasicAuthToken(
          this.authenticationService.getLoggedInUserName(), password) } });
          //https://angular.io/guide/http#making-a-put-request
      }

  }
