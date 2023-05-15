import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  url = this.portafolioService.url;
  lista_habilidades:
    {
      id_habilidad: number;
      habilidad: string;
      nivel_hab: string;
    }[] = [];
  lista_idiomas:
    {
      id_idioma: number;
      nivel_idioma: string;
      idioma: string;
    }[] = [];
  logueado: boolean=false;
  mostrarFormIdioma: boolean=false;
  mostrarFormHab: boolean=false;

  newNombre:string="";
  newNivel:string="";
  newNombreH:string="";
  newNivelH:string="";

  constructor(private http: HttpClient,
    private router: Router,
    private portafolioService: PortafolioServiceService,
    private authenticationService:AuthService) {
      this.logueado = authenticationService.isUserLoggedIn();
    }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.lista_habilidades = res.lista_habilidades;
      this.lista_idiomas = res.lista_idiomas;
    });
  }

  agregarHabilidad(newNombre:string,newNivel:string){
    let nuevaHab = {
      habilidad:newNombre,
      nivel_hab:newNivel
    }
    this.http.post(this.url + 'habilidades/cargar', nuevaHab).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud POST', error);
      }
    );
  }

  cambiarHabilidad(id:number,nombre_hab: string, nivel: string) {
    let habilidad = {
      id_habilidad:id,
      habilidad:nombre_hab,
      nivel_hab:nivel
    }
    this.http.put(this.url + 'habilidades/editar', habilidad).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud PUT', error);
      }
    );
  }

  eliminarHabilidad(id:number) {
    this.http.delete(this.url + 'habilidades/eliminar/' + id).subscribe(
      (response) => {
        console.log('Solicitud DELETE exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud DELETE', error);
      }
    );
  }

  agregarIdioma(newNombre:string,newNivel:string){
    let nuevoIdioma = {
      nivel_idioma:newNombre,
      idioma:newNivel,
    }
    this.http.post(this.url + 'idiomas/cargar', nuevoIdioma).subscribe(
      (response) => {
        console.log('Solicitud POST exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud POST', error);
      }
    );
  }

  cambiarIdioma(id:number,nombre_idioma: string, nivel: string) {
    let idioma = {
      id_idioma:id,
      nivel_idioma:nombre_idioma,
      idioma:nivel,
    }
    this.http.put(this.url + 'idiomas/editar', idioma).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud PUT', error);
      }
    );
  }

  eliminarIdioma(id:number) {
    this.http.delete(this.url + 'idiomas/eliminar/' + id).subscribe(
      (response) => {
        console.log('Solicitud DELETE exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud DELETE', error);
      }
    );
  }
}
