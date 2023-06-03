import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alterinvite2Component } from './alterinvite2.component';

describe('Alterinvite2Component', () => {
  let component: Alterinvite2Component;
  let fixture: ComponentFixture<Alterinvite2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alterinvite2Component]
    });
    fixture = TestBed.createComponent(Alterinvite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
