import { Component, OnInit, ViewChild } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

export interface Dog {
  id: number;
  chip: string;
  name: string;
  gender: string;
  breed_id: number;
  color_id: number;
  birthdate: Date;
  deathdate: Date;
  owner_dni: string;
  owner_fullname: string;
  residence: string;
  created_at: any;
  updated_at: any;
  vet_user_id: number;
}

export interface Response {
  success: boolean;
  dogs: Dog[];
  message: string;
}

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
  providers: [DogsService]
})
export class DogsComponent implements OnInit {

  displayedColumns: string[] = [
    'chip',
    'name',
    'gender',
    'breed_id',
    'color_id',
    'birthdate',
    'deathdate',
    'owner_dni',
    'owner_fullname',
    'created_at',
  ];
  dataSource: MatTableDataSource<Dog> = new MatTableDataSource([]);

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  // Results from API
  dogs: Dog[];
  error: string;
  success: boolean;
  message: string;

  // Edit mode
  dogSelected: Dog;
  editing = false;

  // Filtering properties
  chipFilter = new FormControl('');
  nameFilter = new FormControl('');
  genderFilter = new FormControl('');
  breedFilter = new FormControl('');
  colorFilter = new FormControl('');
  birthdateFilter = new FormControl('');
  deathdateFilter = new FormControl('');
  ownerDniFilter = new FormControl('');
  ownerFullnameFilter = new FormControl('');
  createdAtFilter = new FormControl('');

  filterValues = {
    chip: '',
    name: '',
    gender: '',
    breed_id: '',
    color_id: '',
    birthdate: '',
    deathdate: '',
    owner_dni: '',
    owner_fullname: '',
    created_at: '',
  };

  constructor(private dogsService: DogsService) { }

  tableFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function (data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.chip.toString().indexOf(searchTerms.chip) !== -1
        && data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.gender.toLowerCase().indexOf(searchTerms.gender) !== -1
        && data.breed.toLowerCase().indexOf(searchTerms.breed) !== -1
        && data.color.toLowerCase().indexOf(searchTerms.color) !== -1
        && data.birthdate.toString().indexOf(searchTerms.birthdate) !== -1
        && data.deathdate.toString().indexOf(searchTerms.deathdate) !== -1
        && data.owner_dni.toString().indexOf(searchTerms.owner_dni) !== -1
        && data.owner_fullname.toString().indexOf(searchTerms.owner_fullname) !== -1
        && data.created_at.toString().indexOf(searchTerms.created_at) !== -1;
    };
    return filterFunction;
  }

  ngOnInit() {
    // Filtering by each column.
    this.chipFilter.valueChanges
      .subscribe(
        chip => {
          this.filterValues.chip = chip;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.genderFilter.valueChanges
      .subscribe(
        gender => {
          this.filterValues.gender = gender;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.breedFilter.valueChanges
      .subscribe(
        breed => {
          this.filterValues.breed_id = breed;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.colorFilter.valueChanges
      .subscribe(
        color => {
          this.filterValues.color_id = color;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.birthdateFilter.valueChanges
      .subscribe(
        birthdate => {
          this.filterValues.birthdate = birthdate;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.deathdateFilter.valueChanges
      .subscribe(
        deathdate => {
          this.filterValues.deathdate = deathdate;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.ownerDniFilter.valueChanges
      .subscribe(
        ownerDni => {
          this.filterValues.owner_dni = ownerDni;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.ownerFullnameFilter.valueChanges
      .subscribe(
        ownerFullname => {
          this.filterValues.owner_fullname = ownerFullname;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );
    this.createdAtFilter.valueChanges
      .subscribe(
        createdAt => {
          this.filterValues.created_at = createdAt;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      );

    // Get the dogs from the API.
    this.getDogs();
  }

  /**
   * Consume the API through the service.
   */
  getDogs() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.dogsService.getDogs()
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
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(this.dogs);
          // Set paginator and sorting.
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          // Multi-filtering by each field.
          this.dataSource.filterPredicate = this.tableFilter();
    console.log(this.dogs);

        }
      );



  }



  onSelect(dog: Dog) {
    this.dogSelected = dog;
    this.editing = true;
  }

}
