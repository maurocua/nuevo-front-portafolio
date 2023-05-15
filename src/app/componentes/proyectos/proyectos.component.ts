import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  url = this.portafolioService.url;

  lista_proyectos:
    {
      id_proyecto: number;
      proyecto: string;
      link_proyecto: string;
    }[] = [];
  logueado: boolean = false;
  newNombre: string = "";
  newLink: string = "";
  mostrarFormPro: boolean = false;

  constructor(private http: HttpClient,
    private router: Router,
    private portafolioService: PortafolioServiceService,
    private authenticationService: AuthService) {
    this.logueado = authenticationService.isUserLoggedIn();
  }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.lista_proyectos = res.lista_proyectos;
    });
    // this.authenticationService.logout();///////////////////////
  }

  agregarProyecto(newNombre: string, newLink: string) {
    let nuevoProyecto={
      proyecto: newNombre,
      link_proyecto: newLink
    }
    this.http.post(this.url + 'proyectos/cargar', nuevoProyecto).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud POST', error);
      }
    );
  }

  cambiarProyecto(id: number, nombre_hab: string, nivel: string) {
    let proyecto = {
      id_proyecto: id,
      proyecto: nombre_hab,
      link_proyecto: nivel
    }
    this.http.put(this.url + 'proyectos/editar', proyecto).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud PUT', error);
      }
    );
  }

  eliminarProyecto(id: number) {
    this.http.delete(this.url + 'proyectos/eliminar/' + id).subscribe(
      (response) => {
        console.log('Solicitud DELETE exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud DELETE', error);
      }
    );
  }
}
