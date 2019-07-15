import { Component, OnInit } from '@angular/core';
import { DogsService } from 'src/app/services/dogs.service';
import { TableColumn, ButtonType, Width, Height, Align } from 'simplemattable';
import { MatSnackBar } from '@angular/material';
import { Dog } from 'src/app/models/Dog';
import { OcikitosResponse } from 'src/app/models/Response';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
  providers: [DogsService]
})
export class DogsComponent implements OnInit {

  // Results from API
  response: OcikitosResponse;
  dogs: Dog[];
  SNACKBAR_DURATION_IN_MILISECONDS = 5000;

  // Edit mode
  selectedDog: Dog;
  editing = false;

  columns = [
    new TableColumn<Dog, 'chip'>('Chip', 'chip').withColFilter(),
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
      .withOnClick(
        (id, dog) => {
          this.selectedDog = dog;
          this.editing = true;
        }
      )
  ];

  // -------------------------------------------------------------------------

  constructor(
    private dogsService: DogsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getDogs();
  }

  // -------------------------------------------------------------------------

  /**
   * Get all dogs from server.
   */
  getDogs() {
    this.dogsService.getDogs()
      .subscribe(
        response => {
          this.response = response;
          this.dogs = response.data;
        },
        error => console.log(error),
        () => {
          this.snackBar.open(this.response.message, 'OK', {
            duration: this.SNACKBAR_DURATION_IN_MILISECONDS,
          });
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
          this.response = response;
        },
        error => console.log(error),
        () => {
          this.snackBar.open(this.response.message, 'OK', {
            duration: this.SNACKBAR_DURATION_IN_MILISECONDS,
          });
        }
      );
  }

}
