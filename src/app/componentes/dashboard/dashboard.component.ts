import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/login/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  logueado:boolean=false;

  constructor(private authenticationService: AuthService){
      this.logueado = authenticationService.isUserLoggedIn();
     // authenticationService.logout();
    }

}
