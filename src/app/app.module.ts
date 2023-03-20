import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { UltimaCarreraComponent } from './components/ultima-carrera/ultima-carrera.component';
import { ClasificacionConstructoresComponent } from './components/clasificacion-constructores/clasificacion-constructores.component';
import { ClasificacionPilotosComponent } from './components/clasificacion-pilotos/clasificacion-pilotos.component';
import { TwitsF1Component } from './components/twits-f1/twits-f1.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './pages/social/social.component';
import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    UltimaCarreraComponent,
    ClasificacionConstructoresComponent,
    ClasificacionPilotosComponent,
    TwitsF1Component,
    LoginComponent,
    SocialComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
