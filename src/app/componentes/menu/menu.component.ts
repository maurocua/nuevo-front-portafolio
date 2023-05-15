import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  logueado:boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService){
      this.logueado = this.authenticationService.isUserLoggedIn();
    }

    ngOnInit() {
      this.logueado = this.authenticationService.isUserLoggedIn();
      console.log('menu ->' + this.logueado);
    }
    
    manejoLogout() {
      this.logueado = false;
      this.authenticationService.logout();
      this.router.navigate(['/login']);
    }
}
