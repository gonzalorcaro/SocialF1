import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitsF1Component } from './twits-f1.component';

describe('TwitsF1Component', () => {
  let component: TwitsF1Component;
  let fixture: ComponentFixture<TwitsF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitsF1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitsF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
