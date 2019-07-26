import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { map, startWith } from 'rxjs/operators'

import { Dog, Color, Breed } from 'src/app/models/dog'
import { DogsService } from 'src/app/services/dogs.service'
import { Sample } from 'src/app/models/sample'
import { SamplesService } from 'src/app/services/samples.service'
import { OcikitosResponse } from 'src/app/models/response'
import { MatSnackBar } from '@angular/material'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  providers: [DogsService, SamplesService]
})
export class DogComponent implements OnInit {
  @Input() dog: Dog
  // @ViewChild("dogForm", { static: true }) dogForm: HTMLFormElement;
  form: FormGroup
  submitted = false
  dogs: Dog[] = []
  colors: Color[]
  breeds: Breed[]
  filteredBreeds: Observable<Breed[]>
  error: string
  success: boolean
  message: string
  editing = false
  sample: Sample
  origins: string[] = ['droppings', 'blood', 'saliva']
  genders: any[] = [
    {
      id: 'male',
      name: 'Male',
      icon: 'pets',
    },
    {
      id: 'female',
      name: 'Female',
      icon: 'pets',
    },
    {
      id: '',
      name: 'Unknown',
      icon: 'cancel',
    },
  ]
  selectedValue: string
  response: OcikitosResponse
  SNACKBAR_DURATION_IN_MILISECONDS = 5000
  CHIP_LENGTH = 15

  toggleEditing() {
    this.editing = !this.editing
  }

  /**
   * https://material.angular.io/components/autocomplete/overview#setting-separate-control-and-display-values
   */
  displayFn(breed?: Breed): string | undefined {
    return breed ? breed.name : undefined
  }

  private _filter(name: string): Breed[] {
    const filterValue = name.toLowerCase()
    return this.breeds.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0)
  }

  constructor(
    private dogsService: DogsService,
    private samplesService: SamplesService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.dogsService.getBreeds().subscribe(
      response => (this.breeds = response.data),
      errors => console.log(errors),
      () => {
        // Filter the breeds autocomplete
        this.filteredBreeds = this.form.controls.breed.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.breeds.slice())
        )
      }
    )

    this.dogsService.getColors().subscribe(
      response => this.colors = response.data
    )

    if (this.dog == null) {
      // this.dog = new Dog();
    }

    this.form = this.formBuilder.group({
      chip: ['', [Validators.required, Validators.minLength(this.CHIP_LENGTH), Validators.maxLength(this.CHIP_LENGTH)]],
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

    // Stop here if form is invalid
    if (this.form.invalid) {
      return
    }
  }

  addDog() {
    console.log(this.form.value)

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
