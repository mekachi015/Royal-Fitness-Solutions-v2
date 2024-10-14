export interface User {
    name: string;
    email: string;
    bmi: number;
    mealPlanAnswers: {
      favoriteCuisine: string;
      foodAllergies: string;
      dailyCaloricIntake: number;
    };
    trainingPlanAnswers: {
      fitnessGoals: string;
      previousExperience: string;
      preferredWorkoutDays: string;
    };
  }