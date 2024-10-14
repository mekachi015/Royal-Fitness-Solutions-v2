import { Component } from '@angular/core';
import { User } from 'src/app/entities/user-for-dash-board/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  users: User[] = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      bmi: 24.5,
      mealPlanAnswers: {
        favoriteCuisine: 'Italian',
        foodAllergies: 'None',
        dailyCaloricIntake: 2500
      },
      trainingPlanAnswers: {
        fitnessGoals: 'Muscle Gain',
        previousExperience: 'Intermediate',
        preferredWorkoutDays: 'Monday, Wednesday, Friday'
      }
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      bmi: 22.8,
      mealPlanAnswers: {
        favoriteCuisine: 'Mexican',
        foodAllergies: 'Gluten',
        dailyCaloricIntake: 2200
      },
      trainingPlanAnswers: {
        fitnessGoals: 'Weight Loss',
        previousExperience: 'Beginner',
        preferredWorkoutDays: 'Tuesday, Thursday, Saturday'
      }
    }
  ];

  // Method to toggle the visibility of user details
  // toggleUserDetails(index: number): void {
  //   const userDetails = document.querySelectorAll('.user-details')[index];
  //   if (userDetails) {
  //     userDetails.classList.toggle('hidden');
  //   }
  // }

  expandedUsers: boolean[] = []; // Track expanded state

  toggleUserDetails(index: number): void {
    this.expandedUsers[index] = !this.expandedUsers[index]; // Toggle the state
  }
}
