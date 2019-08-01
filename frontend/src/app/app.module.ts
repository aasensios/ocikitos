import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'

// https://angular.io/guide/http
import { HttpClientModule } from '@angular/common/http'

// https://material.angular.io/guide/getting-started
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'

// https://github.com/angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout'

// https://www.npmjs.com/package/simplemattable
import { SimplemattableModule } from 'simplemattable'

// NGX
// import { NgxBarcode6Module } from 'ngx-barcode6'
// import { NgxPaginationModule } from 'ngx-pagination'

// Application Components
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { DogComponent } from './components/dog/dog.component'
import { DogsComponent } from './components/dogs/dogs.component'
import { NotFoundComponent } from './components/not-found/not-found.component'
import { SamplesComponent } from './components/samples/samples.component'
import { StrsComponent } from './components/strs/strs.component'
import { IncidentsComponent } from './components/incidents/incidents.component'
import { InfractionsComponent } from './components/infractions/infractions.component'
import { AboutComponent } from './components/about/about.component'
import { SampleComponent } from './components/sample/sample.component'
import { IncidentComponent } from './components/incident/incident.component'
import { InfractionComponent } from './components/infraction/infraction.component'

// Directives
import { DogDirective } from './directives/dog.directive'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'


@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogsComponent,
    NotFoundComponent,
    DogDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SamplesComponent,
    StrsComponent,
    IncidentsComponent,
    InfractionsComponent,
    AboutComponent,
    SampleComponent,
    IncidentComponent,
    InfractionComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // NgxBarcode6Module,
    // NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    SimplemattableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
