import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assertivepage1Component } from './assertivepage1.component';

describe('Assertivepage1Component', () => {
  let component: Assertivepage1Component;
  let fixture: ComponentFixture<Assertivepage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assertivepage1Component]
    });
    fixture = TestBed.createComponent(Assertivepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
