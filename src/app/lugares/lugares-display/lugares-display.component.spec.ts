import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LugaresDisplayComponent } from './lugares-display.component';

describe('LugaresDisplayComponent', () => {
  let component: LugaresDisplayComponent;
  let fixture: ComponentFixture<LugaresDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LugaresDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LugaresDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
