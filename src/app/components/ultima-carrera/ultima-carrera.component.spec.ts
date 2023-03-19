import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimaCarreraComponent } from './ultima-carrera.component';

describe('UltimaCarreraComponent', () => {
  let component: UltimaCarreraComponent;
  let fixture: ComponentFixture<UltimaCarreraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimaCarreraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimaCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
