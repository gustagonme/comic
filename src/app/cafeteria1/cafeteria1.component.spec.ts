import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafeteria1Component } from './cafeteria1.component';

describe('Cafeteria1Component', () => {
  let component: Cafeteria1Component;
  let fixture: ComponentFixture<Cafeteria1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cafeteria1Component]
    });
    fixture = TestBed.createComponent(Cafeteria1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
