import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {
  trainingPlanForm: FormGroup;
  currentStep: number = 1;  // Keeps track of the current step
  totalSteps: number = 5;   // Total number of steps

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group with controls and validation
    this.trainingPlanForm = this.formBuilder.group({
      fitnessGoals: ['', Validators.required],
      previousExperience: ['', Validators.required],
      activities: ['', Validators.required],
      injuries: ['', Validators.required],
      exerciseAvoid: ['', Validators.required],
      workoutFrequency: [null, [Validators.required, Validators.min(1)]],
      preferredTime: ['', Validators.required],
      equipment: ['', Validators.required],
      workoutPreferences: ['', Validators.required],
      specificGoals: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Navigate to the next step
  nextStep(): void {
    if (this.isCurrentStepValid()) {
      this.currentStep++;
    }
  }

  // Navigate to the previous step
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Check if the current step is valid
  isCurrentStepValid(): boolean {
    const controls = Object.keys(this.trainingPlanForm.controls);
    const stepStart = (this.currentStep - 1) * 2;
    const stepEnd = stepStart + 2;

    // Only validate the controls for the current step
    return controls.slice(stepStart, stepEnd).every(control => this.trainingPlanForm.get(control)?.valid);
  }

  // Submit the form
  onSubmit(): void {
    if (this.trainingPlanForm.valid) {
      console.log('Form Submitted!', this.trainingPlanForm.value);
      Swal.fire({
        title: 'Success!',
        text: 'Your training plan has been submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  onClear():void{
    this.trainingPlanForm.reset();
  }
}



