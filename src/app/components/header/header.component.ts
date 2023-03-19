import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EstaLogueadoService } from 'src/app/services/esta-logueado.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private estaLogueado: EstaLogueadoService,
    private SAuthentication: AuthServiceService,
    private router: Router
    ) {}

  isLogged: boolean = false;

  ngOnInit(): void {
    this.estaLogueado.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLogged = isLoggedIn;
    });
  }

  logout() {
    this.SAuthentication.logout();
    this.isLogged = false;
    this.router.navigate(['/twitsF1']);
  }
}
