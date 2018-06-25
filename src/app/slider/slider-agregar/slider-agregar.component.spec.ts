import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAgregarComponent } from './slider-agregar.component';

describe('SliderAgregarComponent', () => {
  let component: SliderAgregarComponent;
  let fixture: ComponentFixture<SliderAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
