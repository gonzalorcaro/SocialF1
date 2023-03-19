import { Component, OnInit } from '@angular/core';
import { APIF1Service } from 'src/app/services/apif1.service';

@Component({
  selector: 'app-clasificacion-pilotos',
  templateUrl: './clasificacion-pilotos.component.html',
  styleUrls: ['./clasificacion-pilotos.component.css']
})
export class ClasificacionPilotosComponent implements OnInit {

  clasificacionPilotos: any = {};
  clasificacionPilotosCargando: boolean = true;

  constructor(private apiF1: APIF1Service) {}

  ngOnInit() {

    this.apiF1.getClasfPilotos().subscribe((data: any) => {
      this.clasificacionPilotos = data.MRData.StandingsTable.StandingsLists;
      this.clasificacionPilotosCargando = false;
    });
  }
}
