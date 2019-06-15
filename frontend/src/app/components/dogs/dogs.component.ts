import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { DogsService } from '../../services/dogs.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css'],
  providers: [DogsService],
})
export class DogsComponent implements OnInit {

  public dogs: Dog[];
  public dogsFiltered: Dog[] = [];

  error: string;
  success: boolean;
  message: string;
  editing = false;

  // Pagination properties
  itemsPerPage = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  chipFilter: string;
  nameFilter: string;
  ownerDniFilter: string;
  ownerNameFilter: string;
  dogSelected: Dog;

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs() {
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
          this.dogsFiltered = this.dogs;
        }
      );
  }

  // Method of filter
  filter(): void {
    // Array.filter needs a callback function
    // as a parameter
    this.dogsFiltered = this.dogs.filter(
      dog => {
        let chipValid = false;
        let nameValid = false;
        let ownerDniValid = false;
        let ownerNameValid = false;


        if (this.chipFilter && this.chipFilter !== '') { // filter by chip
          chipValid = dog.chip.toLowerCase().
            indexOf(this.chipFilter.toLowerCase()) !== -1;
        } else {
          chipValid = true;
        }

        if (this.nameFilter && this.nameFilter !== '') { // filter by name
          nameValid = dog.name.toLowerCase().
            indexOf(this.nameFilter.toLowerCase()) !== -1;
        } else {
          nameValid = true;
        }

        if (this.ownerDniFilter && this.ownerDniFilter !== '') { // filter by owner_dni
          ownerDniValid = dog.owner_dni.toLowerCase().
            indexOf(this.ownerDniFilter.toLowerCase()) !== -1;
        } else {
          ownerDniValid = true;
        }

        if (this.ownerNameFilter && this.ownerNameFilter !== '') { // filter by owner_dni
          ownerNameValid = dog.owner_fullname.toLowerCase().
            indexOf(this.ownerNameFilter.toLowerCase()) !== -1;
        } else {
          ownerNameValid = true;
        }

        return (chipValid && nameValid && ownerDniValid && ownerNameValid);
      }

    );
  }

  onSelect(dog: Dog) {
    this.dogSelected = dog;
    this.editing = true;
  }

}
