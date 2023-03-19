import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { EstaLogueadoService } from 'src/app/services/esta-logueado.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private SAuthentication: AuthServiceService,
    private router: Router,
    private estaLogueado: EstaLogueadoService
  ) {}

  isLoggedIn: boolean = this.SAuthentication.isLoggedIn();
  error!: string;
  userName: string = '';
  userPass: string = '';

  login() {

    this.SAuthentication.login(this.userName, this.userPass);
    this.isLoggedIn = this.SAuthentication.isLoggedIn();

    if (this.isLoggedIn) {
      this.estaLogueado.isLoggedIn.emit(true);
      this.router.navigate(['/twitsF1']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
