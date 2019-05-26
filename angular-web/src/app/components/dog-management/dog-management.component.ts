import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DogsService } from '../../services/dogs.service';
import { Dog } from '../../models/dog.model';


@Component({
  selector: 'app-dog-management',
  templateUrl: './dog-management.component.html',
  
  styleUrls: ['./dog-management.component.css']
})

export class DogManagementComponent implements OnInit {

  // properties
  dogs: Dog[] = [];
  dogsFiltered: Dog[] = [];


  // Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  // Filter properties
  chipFilter: string;
  nameFilter: string;
  ownerDniFilter: string;
  ownerNameFilter: string;
  dogSelected: Dog;

  constructor(private router: Router, private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsService.getDogs()
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
  }

}
