import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DogsComponent } from './components/dogs/dogs.component'
import { DogComponent } from './components/dog/dog.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { HomeComponent } from './components/home/home.component'
import { StrsComponent } from './components/strs/strs.component'
import { SamplesComponent } from './components/samples/samples.component'
import { IncidentsComponent } from './components/incidents/incidents.component'
import { InfractionsComponent } from './components/infractions/infractions.component'
import { AboutComponent } from './components/about/about.component'
import { SampleComponent } from './components/sample/sample.component'
import { IncidentComponent } from './components/incident/incident.component'
import { InfractionComponent } from './components/infraction/infraction.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dog', component: DogComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'sample', component: SampleComponent },
  { path: 'samples', component: SamplesComponent },
  { path: 'strs', component: StrsComponent },
  { path: 'incident', component: IncidentComponent },
  { path: 'incidents', component: IncidentsComponent },
  { path: 'infraction', component: InfractionComponent },
  { path: 'infractions', component: InfractionsComponent },
  // { path: '', component: InfoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
