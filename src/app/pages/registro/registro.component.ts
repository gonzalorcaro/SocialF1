import { ParseSourceFile } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  error!: string;
  userName: string;
  userPass: string;
  userPassTwo: string;
  usuarios!: Array<IUser>;

  constructor(private router: Router) {
    this.usuarios = [];
    this.userName = '';
    this.userPass = '';
    this.userPassTwo = '';
  }

  registro() {

    if (this.userPass == this.userPassTwo && this.userName != '') {
      let newUsuario = { id: 1, name: this.userName, password: this.userPass };

      if (localStorage.getItem('users') == null) {
        this.usuarios.push(newUsuario);
        localStorage.setItem('users', JSON.stringify(this.usuarios));

      } else {
        this.usuarios = JSON.parse(localStorage.getItem('users')!);
        let usuarioExistente = this.usuarios.find(
          (u) => u.name === newUsuario.name
        );

        if (!usuarioExistente) {
          this.usuarios.push(newUsuario);
          localStorage.setItem('users', JSON.stringify(this.usuarios));
          this.router.navigate(['/twitsF1']);
          
        } else {
          this.error = 'Este usuario ya está en uso';
        }
      }
    } else {
      this.error = 'Datos incorrectos';
    }
  }
}
