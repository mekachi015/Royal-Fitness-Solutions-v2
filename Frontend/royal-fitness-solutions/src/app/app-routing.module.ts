import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealPlansComponent } from './pages/meal-plans/meal-plans.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'meals', component:MealPlansComponent},
  {path: 'training', component:TrainingPlansComponent},
  {path: 'contact', component:ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
