import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionConstructoresComponent } from './clasificacion-constructores.component';

describe('ClasificacionConstructoresComponent', () => {
  let component: ClasificacionConstructoresComponent;
  let fixture: ComponentFixture<ClasificacionConstructoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasificacionConstructoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasificacionConstructoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
