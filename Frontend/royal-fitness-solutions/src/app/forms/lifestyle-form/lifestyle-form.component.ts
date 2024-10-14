import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lifestyle-form',
  templateUrl: './lifestyle-form.component.html',
  styleUrls: ['./lifestyle-form.component.scss']
})
export class LifestyleFormComponent {
  lifestyleFormGroup: FormGroup;
  foodPreferencesFormGroup: FormGroup;
  nutritionalNeedsFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.lifestyleFormGroup = this.fb.group({
      fitnessGoals: ['', Validators.required],
      workoutFrequency: ['', Validators.required],
      dietaryRestrictions: [''],
      dailySchedule: ['']
    });

    this.foodPreferencesFormGroup = this.fb.group({
      favoriteFoods: [''],
      dislikedFoods: [''],
      eatOutFrequency: [''],
      cookingHabits: ['']
    });

    this.nutritionalNeedsFormGroup = this.fb.group({
      medicalConditionsDiet: [''],
      pregnantBreastfeeding: ['']
    });
  }

  onLifestyleSubmit() {
    if (
      this.lifestyleFormGroup.valid &&
      this.foodPreferencesFormGroup.valid &&
      this.nutritionalNeedsFormGroup.valid
    ) {
      const formData = {
        ...this.lifestyleFormGroup.value,
        ...this.foodPreferencesFormGroup.value,
        ...this.nutritionalNeedsFormGroup.value
      };
      console.log(formData);

      Swal.fire({
        title: 'Success!',
        text: 'Your information has been submitted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    }
  }
  
}
