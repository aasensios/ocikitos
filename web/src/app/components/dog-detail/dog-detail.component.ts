import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Dog } from '../../models/dog.model';
import { Color } from '../../models/color.model';
import { Breed } from '../../models/breed.model';

import { DogsService } from '../../services/dogs.service';
import { TablesService } from '../../services/tables.service';
import { Sample } from 'src/app/models/sample.model';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  providers: [DogsService, TablesService],

  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {

  @Input() dog: Dog;
  @ViewChild('dogForm') dogForm: HTMLFormElement;
  form: FormGroup;
  submitted = false;

  dogs: Dog[] = [];
  public colors: Color[];
  public breeds: Breed[];
  error: string;
  success: boolean;
  message: string;
  editing = false;

  sample: Sample = new Sample();

  origins: string[] = ['droppings', 'blood', 'saliva'];
  genders: string[] = ['male', 'female'];

  // Debugging
  /* colors = ['white', 'black', 'grey'];
  breeds = ['Pastor Aleman', 'Husky', 'Caniche', 'Chiguagua', 'Chucho']; */

  selectedValue: string;

  constructor(
    private dogsService: DogsService,
    private tablesService: TablesService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.tablesService.getColors()
      .subscribe(
        response => {
          const success = response['success'];
          this.colors = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.colors);

        }
      );
    this.tablesService.getBreeds()
      .subscribe(
        response => {
          const success = response['success'];
          this.breeds = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.breeds);

        }
      );

    this.form = this.formBuilder.group({
      chip: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(15)]],
      name: ['', Validators.required],
      gender: ['', null],
      breed: ['', null],
      color: ['', null],
      birthdate: ['', null],
      deathdate: ['', null],
      owner_dni: ['', Validators.required],
      owner_fullname: ['', Validators.required],
      owner_email: ['', [Validators.required, Validators.email]],
      residence: ['', null],
      barcode: ['', Validators.required],
      sampleOrigin: ['', null],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    // if (this.form.invalid) {
    //   return;
    // }
  }

  addDog() {
    this.dogsService.create(this.dog)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.dog = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          // Feedback to the user -- TODO: redirect to the home page
          // Debugging
          console.log(this.success);
          console.log(this.dog);
          console.log(this.message);
        }
      );

    // Debugging
    console.log(this.error);
  }

  modifyDog() {
    this.dogsService.update(this.dog)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.dog = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          // Feedback to the user -- TODO: redirect to the home page
          // Debugging
          console.log(this.success);
          console.log(this.dog);
          console.log(this.message);
        }
      );

    // Debugging
    console.log(this.error);
  }

}
