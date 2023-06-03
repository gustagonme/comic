import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Relaxpage1Component } from './relaxpage1.component';

describe('Relaxpage1Component', () => {
  let component: Relaxpage1Component;
  let fixture: ComponentFixture<Relaxpage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Relaxpage1Component]
    });
    fixture = TestBed.createComponent(Relaxpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
