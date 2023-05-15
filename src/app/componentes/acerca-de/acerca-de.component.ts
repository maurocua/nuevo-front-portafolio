import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosPrincipales } from 'src/app/model/datos-principales';
import { AcercaDeService } from 'src/app/servicios/acerca-de.service';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  url = this.portafolioService.url;
  
  acerca_de = "";
  //acerca="";

  password:any;
  mostrarCampoPass=false;
  
  logueado:boolean=false;

  principal: DatosPrincipales = {
    nombre_completo: "",
    edad: 0,
    ruta_foto: "",
    acerca_de: "",
    descripcion: "",
    ubicacion: ""
  };

  constructor(private http: HttpClient,
    private router: Router,
    private portafolioService: PortafolioServiceService,
    private acercaDeService:AcercaDeService,
    private authenticationService:AuthService) {
      this.logueado = authenticationService.isUserLoggedIn();
    }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.acerca_de = res.acerca_de;
      this.principal = {
        nombre_completo: res.nombre_completo,
        edad: res.edad,
        ruta_foto: res.ruta_foto,
        acerca_de: this.acerca_de,
        descripcion: res.descripcion,
        ubicacion: res.ubicacion
      }
    });
    
  }

  cambiarAcercaDe(acerca:string){
    this.principal.acerca_de = acerca;
    this.http.put(this.url + 'editar', this.principal).subscribe(
      (response) => {
        console.log('Solicitud PUT exitosa', response);
      },
      (error) => {
        console.log('Error durante la solicitud PUT', error);
      }
    );
  }
}
