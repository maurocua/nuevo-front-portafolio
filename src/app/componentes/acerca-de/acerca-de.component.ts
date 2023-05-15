import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  acerca_de = "";
  acerca="";

  password:any;
  mostrarCampoPass=false;
  
  logueado:boolean=false;

  constructor(private router: Router,
    private portafolioService: PortafolioServiceService,
    private acercaDeService:AcercaDeService,
    private authenticationService:AuthService) {
      this.logueado = authenticationService.isUserLoggedIn();
    }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.acerca_de = res.acerca_de;
    });
    
  }

  cambiarAcercaDe(acerca_de:string,password:any){
    this.acerca=acerca_de;
    this.acercaDeService.editarAcercaDe(this.acerca,password);
    this.router.navigate(['/login']);
  }
}
