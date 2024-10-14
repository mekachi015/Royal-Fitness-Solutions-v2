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

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationFormComponent,
    QueryFormComponent,
    ExerciseFormComponent,
    HomePageComponent,
    MealPlansComponent,
    TrainingPlansComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
