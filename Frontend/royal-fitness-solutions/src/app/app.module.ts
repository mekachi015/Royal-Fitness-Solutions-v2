import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationFormComponent } from './forms/authentication-form/authentication-form.component';
import { QueryFormComponent } from './forms/query-form/query-form.component';
import { ExerciseFormComponent } from './forms/exercise-form/exercise-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealPlansComponent } from './pages/meal-plans/meal-plans.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LifestyleFormComponent } from './forms/lifestyle-form/lifestyle-form.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { UserProfileComponentComponent } from './components/user-profile-component/user-profile-component.component';
import { MealPlanComponentComponent } from './components/meal-plan-component/meal-plan-component.component';
import { TrainingPlanComponentComponent } from './components/training-plan-component/training-plan-component.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationFormComponent,
    QueryFormComponent,
    ExerciseFormComponent,
    HomePageComponent,
    MealPlansComponent,
    TrainingPlansComponent,
    ContactPageComponent,
    LifestyleFormComponent,
    NavigationBarComponent,
    UserProfileComponentComponent,
    MealPlanComponentComponent,
    TrainingPlanComponentComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
