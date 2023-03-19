import { Component } from '@angular/core';
import { APIF1Service } from 'src/app/services/apif1.service';

@Component({
  selector: 'app-clasificacion-constructores',
  templateUrl: './clasificacion-constructores.component.html',
  styleUrls: ['./clasificacion-constructores.component.css']
})
export class ClasificacionConstructoresComponent {
  clasificacionConstructores: any = {};
  clasificacionConstructoresCargando: boolean = true;

  constructor(private apiF1: APIF1Service) {}

  ngOnInit() {

    this.apiF1.getClasfConstructores().subscribe((data: any) => {
      this.clasificacionConstructores = data.MRData.StandingsTable.StandingsLists;
      this.clasificacionConstructoresCargando = false;
    });
  }
}
