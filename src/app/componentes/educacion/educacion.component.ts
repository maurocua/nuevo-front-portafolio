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

  constructor(private router: Router,
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
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarEstudio(id:number,nombre_estudio: string, nivel: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  eliminarEstudio(id:number) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }
}
