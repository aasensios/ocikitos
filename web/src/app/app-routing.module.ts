import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogComponent } from './components/dog/dog.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StrsComponent } from './components/strs/strs.component';
import { SamplesComponent } from './components/samples/samples.component';
import { IncidentsComponent } from './components/incidents/incidents.component';
import { InfractionsComponent } from './components/infractions/infractions.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {path: 'home',  component: HomeComponent} ,
  {path: 'info',  component: InfoComponent} ,
  {path: 'login',  component: LoginComponent} ,
  {path: 'register',  component: RegisterComponent} ,
  {path: 'dog',  component: DogComponent},
  {path: 'dogs',  component: DogsComponent} ,
  {path: 'samples',  component: SamplesComponent},
  {path: 'strs',  component: StrsComponent},
  {path: 'incidents',  component: IncidentsComponent},
  {path: 'infractions',  component: InfractionsComponent},
  {path: '**',  component: ErrorComponent},
  {path: '',  component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
