import { Component, OnInit, ViewChild } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { TableColumn, ButtonType, Width, Height } from 'simplemattable';
import { Dog } from 'src/app/models/dog.model';

// export interface Dog {
//   id: number;
//   chip: string;
//   name: string;
//   gender: string;
//   breed_id: number;
//   color_id: number;
//   birthdate: Date;
//   deathdate: Date;
//   owner_dni: string;
//   owner_fullname: string;
//   residence: string;
//   created_at: any;
//   updated_at: any;
//   vet_user_id: number;
// }

// export interface Response {
//   success: boolean;
//   dogs: Dog[];
//   message: string;
// }

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
  providers: [DogsService]
})
export class DogsComponent implements OnInit {

  // Results from API
  dogs: Dog[];
  error: string;
  success: boolean;
  message: string;

  // Edit mode
  dogSelected: Dog;
  editing = false;

  columnsFilter = [
    new TableColumn<Dog, 'chip'>('Chip', 'chip').withColFilter().isHiddenSm(true),
    new TableColumn<Dog, 'name'>('Name', 'name').withColFilter(),
    new TableColumn<Dog, 'gender'>('Gender', 'gender').withColFilter(),
    new TableColumn<Dog, 'breed_id'>('Breed', 'breed_id').withColFilter(),
    new TableColumn<Dog, 'color_id'>('Color', 'color_id').withColFilter(),
    new TableColumn<Dog, 'owner_dni'>('DNI', 'owner_dni').withColFilter(),
    new TableColumn<Dog, 'owner_fullname'>('Owner Fullname', 'owner_fullname').withColFilter(),
    new TableColumn<Dog, 'residence'>('Residence', 'residence').withColFilter().isHiddenSm(true),
    new TableColumn<Dog, 'edit'>('Edit', 'edit')
      .withIcon((id) => id < 255511332976721 ? 'delete' : 'edit')
      .withButton(ButtonType.RAISED)
      .withButtonColor('primary')
      // .withWidth(Width.px(125))
      // .withHeightFn(() => Height.px(10))
      .withOnClick(id => {
        this.dogSelected = new Dog();
        this.dogSelected.id = id;
        // this.dogSelected.id = id;
        this.editing = true;
        console.log(this.dogSelected);

      }),
  ];

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    // Initialize the selected dog.
    this.dogSelected = new Dog();
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
          // this.dogs.forEach(dog => {
          //   dog.edit = 'Edit';
          // });
          console.log(this.dogs);
        }
      );
  }

}
