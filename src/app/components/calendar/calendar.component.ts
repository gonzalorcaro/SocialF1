import { Component, OnInit } from '@angular/core';
import { APIF1Service } from 'src/app/services/apif1.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {

  season!: number;
  calendarioCarreras: any = {};
  loading: boolean = true;

  constructor(private serviceApiF1: APIF1Service) {}

  ngOnInit() {
    this.serviceApiF1.getCalendario().subscribe((data: any) => {

    this.calendarioCarreras = data.MRData.RaceTable.Races;
    this.season = data.MRData.RaceTable.season;
    this.loading = false;

    });
  }
}
