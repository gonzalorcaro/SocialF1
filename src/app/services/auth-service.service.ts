import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  // Guardamos los datos de la sesión en memoria
  loggedIn: boolean = false;
  userName: string = '';
  usuarios: IUser[] = [];
  userObject!: IUser;
  constructor() {}

  login(loginName: string, loginPassword: string) {
    if (localStorage.getItem('users') != null) {
      this.usuarios = JSON.parse(localStorage.getItem('users')!);

      this.usuarios.forEach((user) => {
        if (user.name === loginName && user.password === loginPassword)
          this.userObject = user;
      });
      // Comprueba si userObject tiene datos
      if (this.userObject) {
        this.loggedIn = true;
        // Añado los datos del usuario loggeado en memoria
        this.setUser(this.userObject);
      }
    }
  }

  logout() {
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  // Este método recoge los datos del usuario loggeado de la BD
  // y los guarda en memoria
  setUser(userLogged: IUser) {
    this.userName = userLogged.name;
  }

  getUser() {
    return this.userName;
  }
}
