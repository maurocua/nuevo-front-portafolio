import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string="";
  password: string="";
  mensajeError = 'Usuario y/o contraseña incorrectos';
  mensajeOk="";
  loginOk = false;
  loginError=false;
  logueado:boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService){
      this.logueado = authenticationService.isUserLoggedIn();
    }

  handleLogin() {
      this.authenticationService.authenticationService(this.username, this.password).subscribe((result)=> {
      this.loginOk = true;
      this.loginError=false;
      this.mensajeOk = 'Usuario logueado correctamente';
      this.router.navigate(['/']);
      this.logueado = true;
    }, () => {
      this.loginOk = false;
      this.loginError=true;
    });     
  }
}
