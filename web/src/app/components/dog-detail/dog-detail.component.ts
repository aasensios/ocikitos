import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Dog } from '../../models/dog.model';
import { Color } from '../../models/color.model';
import { Breed } from '../../models/breed.model';

import { DogsService } from '../../services/dogs.service';
import { TablesService } from '../../services/tables.service';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  providers: [DogsService, TablesService],

  styleUrls: ['./dog-detail.component.css']
})

export class DogDetailComponent implements OnInit {

  DogForm: FormGroup;
  submitted = false;

  dog: Dog;
  dogs: Dog[] = [];
  public colors: Color[];
  public breeds: Breed[];

  sampleBarcode = '';
  sampleOrigin = '';


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

    this.dog = new Dog();

    this.DogForm = this.formBuilder.group({
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
      sampleorigin: ['', null],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.DogForm.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.dog);

    // stop here if form is invalid
    if (this.DogForm.invalid) {
      return;
    }

    

    // Debugging
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.DogForm.value));
  }

  createDog(dog: Dog) {
    this.dogsService.addDog(dog)
      .subscribe(
        response => {
          const success = response['success'];
          this.dogs = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.dogs);

        }
      );
  }
}
