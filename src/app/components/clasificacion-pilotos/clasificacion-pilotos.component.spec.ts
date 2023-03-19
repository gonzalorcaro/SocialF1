import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionPilotosComponent } from './clasificacion-pilotos.component';

describe('ClasificacionPilotosComponent', () => {
  let component: ClasificacionPilotosComponent;
  let fixture: ComponentFixture<ClasificacionPilotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionPilotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionPilotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
