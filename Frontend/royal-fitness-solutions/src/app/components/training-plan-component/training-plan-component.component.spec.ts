import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingPlanComponentComponent } from './training-plan-component.component';

describe('TrainingPlanComponentComponent', () => {
  let component: TrainingPlanComponentComponent;
  let fixture: ComponentFixture<TrainingPlanComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingPlanComponentComponent]
    });
    fixture = TestBed.createComponent(TrainingPlanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
