import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MealPlansComponent } from './pages/meal-plans/meal-plans.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthenticationFormComponent } from './forms/authentication-form/authentication-form.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'meals', component:MealPlansComponent},
  {path: 'training', component:TrainingPlansComponent},
  {path: 'contact', component:ContactPageComponent},
  {path: 'admin', component:AdminPageComponent},
  {path: 'auth', component: AuthPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
