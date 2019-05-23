import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { ErrorComponent } from './error/error.component';
import { DogManagementComponent } from './dog-management/dog-management.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path: 'login',  component: LoginComponent} ,
  {path: 'register',  component: RegisterComponent} ,
  {path: 'dogs',  component: DogsComponent} ,
  {path: 'dog-detail',  component: DogDetailComponent},
  {path: 'dog-management',  component: DogManagementComponent},
  {path: '**',  component: ErrorComponent},
  {path: '',  component: ErrorComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
