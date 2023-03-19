import { Component, OnInit } from '@angular/core';
import { APIF1Service } from 'src/app/services/apif1.service';

@Component({
  selector: 'app-ultima-carrera',
  templateUrl: './ultima-carrera.component.html',
  styleUrls: ['./ultima-carrera.component.css']
})
export class UltimaCarreraComponent implements OnInit {

  circuito: any = {}
  resultadoCarrera: any = {}
  loading: boolean = true;

  constructor(private serviceApiF1: APIF1Service) {}

  ngOnInit() {
    this.serviceApiF1.getUltimaCarrera().subscribe((data: any) => {

  this.circuito = data.MRData.RaceTable.Races[0].Circuit;
    this.resultadoCarrera = data.MRData.RaceTable.Races[0].Results;
    this.loading = false;

    });
  }
}
