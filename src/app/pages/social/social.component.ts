import { Component, OnInit } from '@angular/core';
import { IComentario } from 'src/app/interfaces/IComentario';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ComentariosService } from 'src/app/services/comentarios.service';

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

  constructor(
    private SAuthentication: AuthServiceService,
    private SComentarios: ComentariosService
  ) {
    this.nombreUsuario = this.SAuthentication.getUser();
  }

  ngOnInit(): void {
    this.isLogged = this.SAuthentication.isLoggedIn();

    this.SComentarios.returnComments().subscribe(
      (comentarios: Array<IComentario>) => {
        this.comentarios = comentarios;
        console.log(comentarios);
        console.log(this.nombreUsuario);
      }
    );
  }

  addComment() {
    let newComentario = {
      nombre: this.nombreUsuario,
      fecha: new Date().toISOString(),
      mensaje: this.mensaje,
    };

    this.SComentarios.addAndReturnCooment(newComentario).subscribe(
      (comentarios: Array<IComentario>) => {
        this.comentarios = comentarios;
      }
    );
  }
}
