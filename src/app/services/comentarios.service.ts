import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IComentario } from '../interfaces/IComentario';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  comentarios!: Array<IComentario>;
  constructor() {
    this.comentarios = [];
  }

  returnComments(): Observable<Array<IComentario>> {
    if (localStorage.getItem('comentarios') != null) {
      this.comentarios = JSON.parse(localStorage.getItem('comentarios')!);
    }

    return of(this.comentarios);
  }

  addAndReturnCooment(comment: IComentario): Observable<Array<IComentario>> {
    if (localStorage.getItem('comentarios') != null) {
      this.comentarios = JSON.parse(localStorage.getItem('comentarios')!);
    }

    this.comentarios.push(comment);
    localStorage.setItem('comentarios', JSON.stringify(this.comentarios));

    return of(this.comentarios);
  }
}
