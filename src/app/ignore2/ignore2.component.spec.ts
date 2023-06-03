import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ignore2Component } from './ignore2.component';

describe('Ignore2Component', () => {
  let component: Ignore2Component;
  let fixture: ComponentFixture<Ignore2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ignore2Component]
    });
    fixture = TestBed.createComponent(Ignore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
