import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleFormComponent } from './lifestyle-form.component';

describe('LifestyleFormComponent', () => {
  let component: LifestyleFormComponent;
  let fixture: ComponentFixture<LifestyleFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifestyleFormComponent]
    });
    fixture = TestBed.createComponent(LifestyleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
