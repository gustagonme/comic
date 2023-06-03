import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alterinvite1Component } from './alterinvite1.component';

describe('Alterinvite1Component', () => {
  let component: Alterinvite1Component;
  let fixture: ComponentFixture<Alterinvite1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alterinvite1Component]
    });
    fixture = TestBed.createComponent(Alterinvite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
