import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { ErrorComponent } from './error/error.component';
import { DogDirective } from './directives/dog.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DogManagementComponent } from './dog-management/dog-management.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    ErrorComponent,
    DogDirective,
    DogManagementComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
