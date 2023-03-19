import { Component, OnInit } from '@angular/core';
import { IComentario } from 'src/app/interfaces/IComentario';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  isLogged: boolean = false;
  comentarios!: Array<IComentario>;
  mensaje: string = '';
  nombreUsuario!: string;

  constructor(private SAuthentication: AuthServiceService) {
    this.nombreUsuario = this.SAuthentication.getUser();
  }

  ngOnInit(): void {
    this.isLogged = this.SAuthentication.isLoggedIn();
  }

  addComment() {
    let today = new Date();
    let day = today.getDate().toString().padStart(2, "0"); 
    let month = (today.getMonth() + 1).toString().padStart(2, "0"); 
    let year = today.getFullYear().toString(); 
    let formattedDate = `${day}/${month}/${year}`; 

    let newComentario = { nombre: this.nombreUsuario, fecha: formattedDate, mensaje: this.mensaje };

    console.log(newComentario.fecha, newComentario.nombre, newComentario.mensaje);
  }
}
