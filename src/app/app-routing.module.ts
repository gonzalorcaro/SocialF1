import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClasificacionConstructoresComponent } from './components/clasificacion-constructores/clasificacion-constructores.component';
import { ClasificacionPilotosComponent } from './components/clasificacion-pilotos/clasificacion-pilotos.component';
import { TwitsF1Component } from './components/twits-f1/twits-f1.component';
import { UltimaCarreraComponent } from './components/ultima-carrera/ultima-carrera.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SocialComponent } from './pages/social/social.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/twitsF1',
    pathMatch: 'full'
  },
  {
    path: 'calendario',
    component: CalendarComponent
  },
  {
    path: 'ultimaCarrera',
    component: UltimaCarreraComponent
  },
  {
    path: 'clasificacionPilotos',
    component: ClasificacionPilotosComponent
  },
  {
    path: 'clasificacionConstructores',
    component: ClasificacionConstructoresComponent
  },
  {
    path: 'twitsF1',
    component: TwitsF1Component
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'social',
    component: SocialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
