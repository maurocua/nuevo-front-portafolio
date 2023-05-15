import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  url = this.portafolioService.url;
  lista_estudios:
    {
      id_estudio: number;
      nombre_estudio: string;
      nivel: string;
    }[] = [];
  logueado: boolean = false;
  mostrarFormEst=false;
  newNombre:string="";
  newNivel:string="";

  constructor(private http: HttpClient,
    private router: Router,
    private portafolioService: PortafolioServiceService,
    private authenticationService: AuthService) {
    this.logueado = authenticationService.isUserLoggedIn();
  }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.lista_estudios = res.lista_estudios;
    });
  }

  agregarEstudio(newNombre:string,newNivel:string){
    let nuevoEstudio = {
      nombre_estudio: newNombre, 
      nivel: newNivel 
    }
    this.http.post(this.url + 'estudios/cargar', nuevoEstudio).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud POST', error);
      }
    );
  }

  cambiarEstudio(id:number,nombre_estudio: string, nivel: string) {
    let estudio = {
      id_estudio: id, 
      nombre_estudio: nombre_estudio, 
      nivel: nivel 
    }
    this.http.put(this.url + 'estudios/editar', estudio).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud PUT', error);
      }
    );
  }

  eliminarEstudio(id:number) {
    this.http.delete(this.url + 'estudios/eliminar/' + id).subscribe(
      (response) => {
        console.log('Solicitud DELETE exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud DELETE', error);
      }
    );
  }
}
