import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveComponent } from './surve.component';

describe('SurveComponent', () => {
  let component: SurveComponent;
  let fixture: ComponentFixture<SurveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveComponent]
    });
    fixture = TestBed.createComponent(SurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
