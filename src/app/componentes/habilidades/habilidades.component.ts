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

  constructor(private router: Router,
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
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarHabilidad(id:number,nombre_idio: string, nivel: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  eliminarHabilidad(id:number) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  agregarIdioma(newNombre:string,newNivel:string){
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarIdioma(id:number,nombre_hab: string, nivel: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  eliminarIdioma(id:number) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }
}
