import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Classroom2Component } from './classroom2.component';

describe('Classroom2Component', () => {
  let component: Classroom2Component;
  let fixture: ComponentFixture<Classroom2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Classroom2Component]
    });
    fixture = TestBed.createComponent(Classroom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
