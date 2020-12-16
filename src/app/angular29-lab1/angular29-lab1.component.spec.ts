import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular29Lab1Component } from './angular29-lab1.component';

describe('Angular29Lab1Component', () => {
  let component: Angular29Lab1Component;
  let fixture: ComponentFixture<Angular29Lab1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular29Lab1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular29Lab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
