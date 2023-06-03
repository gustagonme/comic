import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cafeteria2Component } from './cafeteria2.component';

describe('Cafeteria2Component', () => {
  let component: Cafeteria2Component;
  let fixture: ComponentFixture<Cafeteria2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cafeteria2Component]
    });
    fixture = TestBed.createComponent(Cafeteria2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
