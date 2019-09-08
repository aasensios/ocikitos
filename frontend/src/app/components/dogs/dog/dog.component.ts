import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { map, startWith } from 'rxjs/operators'

import { Dog, Color, Breed } from 'src/app/components/dogs/dog/dog.model'
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
  editing = false
  deceased = false
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
      errors => alert(errors),
      () => {
        // Filter the breeds autocomplete
        this.filteredBreeds = this.form.controls.breed.valueChanges.pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.breeds.slice())
        )
      }
    )

    this.dogsService.getColors().subscribe(response => this.colors = response.data)

    if (this.dog === undefined) {
      this.dog = {
        id: undefined,
        chip: undefined,
        name: undefined,
        gender: undefined,
        breed_id: undefined,
        color_id: undefined,
        birthdate: undefined,
        deathdate: undefined,
        owner_dni: undefined,
        owner_fullname: undefined,
        residence: undefined,
        created_at: undefined,
        updated_at: undefined,
        // vet_user_id: undefined
      }
    }

    this.form = this.formBuilder.group({
      chip: [
        this.dog.chip,
        [Validators.required, Validators.minLength(this.CHIP_LENGTH), Validators.maxLength(this.CHIP_LENGTH)]
      ],
      name: [this.dog.name, Validators.required],
      gender: [this.dog.gender],
      breed: [this.dog.breed_id],
      color: [this.dog.color_id],
      birthdate: [this.dog.birthdate],
      deathdate: [this.dog.deathdate],
      owner_dni: [
        this.dog.owner_dni,
        [
          Validators.required,
          // Validators.pattern('\d{8}[a-zA-Z]')
        ]
      ],
      owner_fullname: [this.dog.owner_fullname, Validators.required],
      residence: [this.dog.residence],
      // barcode: [this.sample.barcode, Validators.required],
      // origin: [this.sample.origin]
    })
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.form.controls
  }

  onSubmit() {
    // Stop here if form is invalid
    if (this.form.invalid) {
      return
    }
  }

  addDog() {
    // Add new dog
    this.dogsService.create(this.form.value)
      .subscribe(
        response => {
          this.response = response
          this.dog = response.data
        },
        error => alert(error),
        // Attach new sample to the new dog
        () => {
          alert(this.response.message)
          // this.sample.dog_id = this.dog.id
          // this.samplesService.create(this.sample)
          //   .subscribe(
          //     response => this.response = response,
          //     error => alert(error),
          //     () => {
          //       this.snackBar.open(this.response.message, 'OK', {
          //         duration: this.SNACKBAR_DURATION_IN_MILISECONDS
          //       })
          //     }
          //   )
        }
      )
  }

  modifyDog() {
    this.dogsService.update(this.form.value)
      .subscribe(
        response => this.response = response,
        error => alert(error),
        () => alert(this.response.message)
      )
  }

  deleteDog() {
    this.dogsService.delete(this.dog).subscribe(
      response => this.response = response,
      error => alert(error),
      () => alert(this.response.message)
    )
  }

}
