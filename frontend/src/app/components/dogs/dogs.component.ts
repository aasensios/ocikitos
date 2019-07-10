import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { TableColumn, ButtonType, Width, Height, Align } from 'simplemattable';
import { MatSnackBar } from '@angular/material';
// import { Dog } from 'src/app/models/Dog';

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
  edit: string;
  // vet_user_id: number;
}

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
  SNACKBAR_DURATION_IN_MILISECONDS = 5000;

  // Edit mode
  selectedDog: Dog;
  editing = false;

  columns = [
    new TableColumn<Dog, 'chip'>('Chip', 'chip').withColFilter()
    // .withOnClick(chip => {
    // this.editing = true;
    // this.getOneDog(chip);
    // })
    ,
    new TableColumn<Dog, 'name'>('Name', 'name').withColFilter(),
    new TableColumn<Dog, 'gender'>('Gender', 'gender').withColFilter(),
    new TableColumn<Dog, 'breed_id'>('Breed', 'breed_id').withColFilter(),
    new TableColumn<Dog, 'color_id'>('Color', 'color_id').withColFilter(),
    new TableColumn<Dog, 'owner_dni'>('DNI', 'owner_dni').withColFilter(),
    new TableColumn<Dog, 'owner_fullname'>('Owner Fullname', 'owner_fullname').withColFilter(),
    new TableColumn<Dog, 'residence'>('Residence', 'residence').withColFilter().isHiddenSm(true),
    new TableColumn<Dog, 'id'>('Edit', 'id').withWidth(Width.pct(1)).withAlign(Align.RIGHT)
      .withIcon(() => 'edit')
      .withButton(ButtonType.ICON)
      .withButtonColor('accent')
      .withOnClick(id => {
        this.editing = true;
        this.getOneDog(id);
      }),
  ];

  constructor(
    private dogsService: DogsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getDogs();
  }

  /**
   * Get all dogs from server.
   */
  getDogs() {
    this.dogsService.getDogs()
      .subscribe(
        response => {
          this.success = response['success'];
          this.dogs = response['data'];
          this.message = response['message'];
        },
        error => this.error = error,
        // Complete
        () => {
          this.dogs.forEach(dog => {
            dog['edit'] = 'Edit';
          });
          this.openSnackBar(this.message, 'OK');
        }
      );
  }

  /**
   * Get one specific dog from server.
   */
  getOneDog(id: number) {
    this.dogsService.getOneDog(id)
      .subscribe(
        response => {
          this.success = response['success'];
          this.selectedDog = response['data'];
          this.message = response['message'];
        },
        error => this.error = error,
        // Complete
        () => {
          // this.dogs.forEach(dog => {
          //   dog['edit'] = 'Edit';
          // });
          this.openSnackBar(this.message, 'OK');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.SNACKBAR_DURATION_IN_MILISECONDS,
    });
  }

}
