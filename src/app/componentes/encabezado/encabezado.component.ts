import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatosPrincipales } from 'src/app/model/datos-principales';
import { PortafolioModel } from 'src/app/model/portafolio-model';
import { Red } from 'src/app/model/red';
import { AuthService } from 'src/app/servicios/login/auth.service';
import { PortafolioServiceService } from 'src/app/servicios/portafolio-service.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  url = this.portafolioService.url;
  principal: DatosPrincipales = {
    nombre_completo: "",
    edad: 0,
    ruta_foto: "",
    acerca_de: "",
    descripcion: "",
    ubicacion: ""
  };
  red: Red = {
    id_contacto: 0,
    red_social: "",
    link_contacto: ""
  }
  red_s="";
  link_c="";

  ruta_foto = "";
  nombre = "";
  descripcion = "";
  edad = 0;
  ubicacion = "";
  lista_redes: {
    id_contacto: number;
    red_social: string;
    link_contacto: string;
  }[] = [];

  logueado: boolean = false;
  //password: any;
  mostrarCampoPassFoto = false;
  mostrarCampoPassNombre = false;
  mostrarCampoPassDescripcion = false;
  mostrarCampoPassEdad = false;
  mostrarCampoPassUbicacion = false;
  mostrarCampoPassRedes = false;
  mostrarFormRed = false;
  newNombre = "";
  newLink = "";

  constructor(private http: HttpClient,
    private router: Router,
    private portafolioService: PortafolioServiceService,
    private authenticationService: AuthService) {
    this.logueado = authenticationService.isUserLoggedIn();
  }

  ngOnInit() {
    this.portafolioService.ejecutarPortafolioService().subscribe((res) => {
      this.ruta_foto = res.ruta_foto;
      this.nombre = res.nombre_completo;
      this.descripcion = res.descripcion;
      this.edad = res.edad;
      this.ubicacion = res.ubicacion;
      this.lista_redes = res.lista_redes;
      this.principal = {
        nombre_completo: this.nombre,
        edad: this.edad,
        ruta_foto: this.ruta_foto,
        acerca_de: res.acerca_de,
        descripcion: this.descripcion,
        ubicacion: this.ubicacion
      }
    });
  }

  cambiarNombre(nombre: string) {
    this.principal.nombre_completo = nombre;
    this.http.put(this.url + 'editar', this.principal).subscribe(
      (response) => {
        console.log('PUT request successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Error during PUT request', error);
      }
    );
  }

  cambiarDescripcion(descripcion: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarEdad(edad: number) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarUbicacion(ubicacion: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  cambiarRutaFoto(ruta: string) {
    //llamar a un servicio
    this.router.navigate(['/login']);
  }

  agregarRed(newNombre: string, newLink: string) {
    let nuevaRed = {
      red_social: newNombre,
      link_contacto: newLink
    }
    this.http.post(this.url + 'redes/cargar', nuevaRed).subscribe(
      (response) => {
        console.log('POST request successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Error during POST request', error);
      }
    );
  }

  cambiarRed(id_r: number, red_s: string, link_c: string) {
    this.red = {
      id_contacto: id_r,
      red_social: red_s,
      link_contacto: link_c
    }
    this.http.put(this.url + 'redes/editar', this.red).subscribe(
      (response) => {
        console.log('PUT request successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Error during PUT request', error);
      }
    );
  }

  eliminarRed(id: number) {
    this.http.delete(this.url + 'redes/eliminar/' + id).subscribe(
      (response) => {
        console.log('DELETE request successful', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log('Error during DELETE request', error);
      }
    );
  }

  //desloguea cuando recarga la paguina evitando error de carga
  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event) {
    this.authenticationService.logout();
  }
}