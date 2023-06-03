import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alterignore2Component } from './alterignore2.component';

describe('Alterignore2Component', () => {
  let component: Alterignore2Component;
  let fixture: ComponentFixture<Alterignore2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alterignore2Component]
    });
    fixture = TestBed.createComponent(Alterignore2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
