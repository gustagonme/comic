import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alterignore1Component } from './alterignore1.component';

describe('Alterignore1Component', () => {
  let component: Alterignore1Component;
  let fixture: ComponentFixture<Alterignore1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alterignore1Component]
    });
    fixture = TestBed.createComponent(Alterignore1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
