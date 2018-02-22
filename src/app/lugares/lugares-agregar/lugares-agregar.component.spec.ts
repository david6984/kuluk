import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresAgregarComponent } from './lugares-agregar.component';

describe('LugaresAgregarComponent', () => {
  let component: LugaresAgregarComponent;
  let fixture: ComponentFixture<LugaresAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
