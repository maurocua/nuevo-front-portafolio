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
  lista_proyectos:
    {
      id_proyecto: number;
      proyecto: string;
      link_proyecto: string;
    }[] = [];
  logueado: boolean = false;
  newNombre:string="";
  newLink:string="";
  mostrarFormPro: boolean = false;

  constructor(private router: Router,
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

  agregarProyecto(newNombre:string,newLink:string){
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarProyecto(id: number, nombre_hab: string, nivel: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  eliminarProyecto(id:number) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }
}
