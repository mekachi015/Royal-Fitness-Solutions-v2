import { Component } from '@angular/core';

@Component({
  selector: 'app-meal-plan-component',
  templateUrl: './meal-plan-component.component.html',
  styleUrls: ['./meal-plan-component.component.scss']
})
export class MealPlanComponentComponent {
  days: { weekday: string, date: number, isToday: boolean }[] = [];
  meals: string[] = ['Breakfast: Oatmeal', 'Lunch: Salad', 'Dinner: Grilled Chicken'];
  workouts: string[] = ['Push-ups', 'Squats', 'Running'];

  ngOnInit(): void {
    this.generateNextSevenDays();
  }

  generateNextSevenDays(): void {
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      // Create a new date object for each day
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
  
      // Get the weekday name (Mon, Tue, etc.)
      const weekday = currentDate.toLocaleString('en-US', { weekday: 'short' }); // e.g., Mon, Tue
      const date = currentDate.getDate(); // e.g., 25
  
      this.days.push({
        weekday: weekday,
        date: date,
        isToday: i === 0 // Highlight today
      });
    }
  }
  
}
