import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoService {

  @Output() isLoggedIn = new EventEmitter<boolean>();
  
  constructor() { }
}
