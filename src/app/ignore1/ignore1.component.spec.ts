import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ignore1Component } from './ignore1.component';

describe('Ignore1Component', () => {
  let component: Ignore1Component;
  let fixture: ComponentFixture<Ignore1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ignore1Component]
    });
    fixture = TestBed.createComponent(Ignore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
