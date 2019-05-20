import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DogService } from '../services/dog.service';
import { Dog } from '../shared/dog.model';
import { DOGS } from '../services/mock.dogs';

@Component({
  selector: 'app-dog-management',
  templateUrl: './dog-management.component.html',
  styleUrls: ['./dog-management.component.css']
})

export class DogManagementComponent implements OnInit {

  //properties
  dogs: Dog[] = [];
  dogsFiltered: Dog[] = [];


  //Pagination properties
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;

  //Filter properties
  chipFilter: string;
  nameFilter: string;
  ownerDniFilter: string;
  ownerNameFilter: string;
  dogSelected: Dog;

  constructor(private router: Router, private dogService: DogService) { }

  ngOnInit() {

/*     this.getFriendsO();
 */    this.dogs = DOGS;

    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.totalItems = this.dogs.length;

    this.dogsFiltered = this.dogs;

  }

  //loaddata of web service
  /*  getFriendsO(): void {
     this.dogService
       .getAllDogs()
       .subscribe(friends => this.dogs = friends);
   } */

  //Method of filter
  filter(): void {
    //Array.filter needs a callback function
    //as a parameter
    this.dogsFiltered = this.dogs.filter(
      dog => {
        let chipValid = false;
        let nameValid = false;
        let ownerDniValid = false;
        let ownerNameValid = false;


        if (this.chipFilter && this.chipFilter != "") { //filter by chip
          chipValid = dog.chip.toLowerCase().
            indexOf(this.chipFilter.toLowerCase()) != -1;
        } else {
          chipValid = true;
        }

        if (this.nameFilter && this.nameFilter != "") { //filter by name
          nameValid = dog.name.toLowerCase().
            indexOf(this.nameFilter.toLowerCase()) != -1;
        } else {
          nameValid = true;
        }

        if (this.ownerDniFilter && this.ownerDniFilter != "") { //filter by owner_dni
          ownerDniValid = dog.owner_dni.toLowerCase().
            indexOf(this.ownerDniFilter.toLowerCase()) != -1;
        } else {
          ownerDniValid = true;
        }

        if (this.ownerNameFilter && this.ownerNameFilter != "") { //filter by owner_dni
          ownerNameValid = dog.owner_fullname.toLowerCase().
            indexOf(this.ownerNameFilter.toLowerCase()) != -1;
        } else {
          ownerNameValid = true;
        }

        return (chipValid && nameValid && ownerDniValid && ownerNameValid);
      }

    );
  }

  onSelect(dog: Dog){
    this.dogSelected = dog;
  }


}
