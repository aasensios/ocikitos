import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogDetailComponent } from './dog-detail/dog-detail.component';
import { ErrorComponent } from './error/error.component';
import { DogDirective } from './directives/dog.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { DogManagementComponent } from './dog-management/dog-management.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogDetailComponent,
    ErrorComponent,
    DogDirective,
    DogManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
