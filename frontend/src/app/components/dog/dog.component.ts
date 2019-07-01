import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Dog } from '../../models/dog.model';
import { Color } from '../../models/color.model';
import { Breed } from '../../models/breed.model';

import { DogsService } from '../../services/dogs.service';
import { TablesService } from '../../services/tables.service';
import { Sample } from '../../models/sample.model';
import { SamplesService } from 'src/app/services/samples.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  providers: [DogsService, TablesService, SamplesService],
})

export class DogComponent implements OnInit {

  @Input() dog: Dog;
  @ViewChild('dogForm', { static: true }) dogForm: HTMLFormElement;
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

  selectedValue: string;

  constructor(
    private dogsService: DogsService,
    private samplesService: SamplesService,
    private tablesService: TablesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.tablesService.getColors()
      .subscribe(
        response => {
          const success = response['success'];
          this.colors = response['data'];
          const message = response['message'];
        }
      );
    this.tablesService.getBreeds()
      .subscribe(
        response => {
          const success = response['success'];
          this.breeds = response['data'];
          const message = response['message'];
        }
      );

    if (this.dog == null) {
      this.dog = new Dog();
    }

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
      // owner_email: ['', [Validators.required, Validators.email]],
      residence: ['', null],
      barcode: ['', Validators.required],
      origin: ['', null],
    });

    this.error = undefined;
  }

  // Convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.dog);


    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }

  addDog() {
    console.log(this.dog);
    
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
          alert(this.message);
          this.sample.dog_id = this.dog.id;
          console.log(this.sample);

          this.samplesService.create(this.sample)
            .subscribe(
              // Success
              response => {
                this.success = response['success'];
                this.sample = response['data'];
                this.message = response['message'];
              },

              // Error handling
              error => this.error = error,

              // Complete
              () => {
                alert(this.message);

              }
            );

        }
      );
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
          alert(this.message);
        }
      );
  }

  deleteDog() {
    this.dogsService.delete(this.dog)
      .subscribe(
        response => {
          this.success = response['success'];
          this.dogs = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          alert(this.message);
        }
      );
  }

}
