import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classroom1Component } from './classroom1.component';

describe('Classroom1Component', () => {
  let component: Classroom1Component;
  let fixture: ComponentFixture<Classroom1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Classroom1Component]
    });
    fixture = TestBed.createComponent(Classroom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
