import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Dog, Color, Breed } from 'src/app/models/dog'
import { DogsService } from 'src/app/services/dogs.service'
import { Sample } from 'src/app/models/sample'
import { SamplesService } from 'src/app/services/samples.service'
import { OcikitosResponse } from 'src/app/models/response'
import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css'],
  providers: [DogsService, SamplesService]
})
export class DogComponent implements OnInit {
  @Input() dog: Dog
  @ViewChild('dogForm', { static: true }) dogForm: HTMLFormElement
  form: FormGroup
  submitted = false
  dogs: Dog[] = []
  public colors: Color[]
  public breeds: Breed[]
  error: string
  success: boolean
  message: string
  editing = false
  sample: Sample
  origins: string[] = ['droppings', 'blood', 'saliva']
  genders: string[] = ['male', 'female']
  selectedValue: string
  response: OcikitosResponse
  SNACKBAR_DURATION_IN_MILISECONDS = 5000

  constructor(
    private dogsService: DogsService,
    private samplesService: SamplesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.dogsService.getColors().subscribe(colors => {
      this.colors = colors
    })
    this.dogsService.getBreeds().subscribe(breeds => {
      this.breeds = breeds
    })

    if (this.dog == null) {
      // this.dog = new Dog();
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
      residence: ['', null],
      barcode: ['', Validators.required],
      origin: ['', null]
    })
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.form.controls
  }

  onSubmit() {
    this.submitted = true
    console.log(this.dog)

    // Stop here if form is invalid
    if (this.form.invalid) {
      return
    }
  }

  addDog() {
    console.log(this.dog)

    this.dogsService.create(this.dog).subscribe(
      // Success
      response => {
        this.response = response
        this.dog = response.data
      },

      // Error handling
      error => (this.error = error),

      // Complete
      () => {
        this.sample.dog_id = this.dog.id
        console.log(this.sample)

        this.samplesService.create(this.sample).subscribe(
          // Success
          response => {
            this.success = response.success
            this.sample = response.data
            this.message = response.message
          },

          // Error handling
          error => (this.error = error),

          // Complete
          () => {
            this.snackBar.open(this.response.message, 'OK', {
              duration: this.SNACKBAR_DURATION_IN_MILISECONDS
            })
          }
        )
      }
    )
  }

  modifyDog() {
    this.dogsService.update(this.dog).subscribe(
      // Success
      response => {
        this.success = response.success
        this.dog = response.data
        this.message = response.message
      },

      // Error handling
      error => (this.error = error),

      // Complete
      () => {
        alert(this.message)
      }
    )
  }

  deleteDog() {
    this.dogsService.delete(this.dog).subscribe(
      response => {
        this.success = response.success
        this.dogs = response.data
        this.message = response.message
      },

      // Error handling
      error => (this.error = error),

      // Complete
      () => {
        alert(this.message)
      }
    )
  }
}
