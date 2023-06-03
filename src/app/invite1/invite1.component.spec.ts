import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invite1Component } from './invite1.component';

describe('Invite1Component', () => {
  let component: Invite1Component;
  let fixture: ComponentFixture<Invite1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Invite1Component]
    });
    fixture = TestBed.createComponent(Invite1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
