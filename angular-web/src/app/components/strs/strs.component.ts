import { Component, OnInit } from '@angular/core';
import { Str } from '../../models/str.model';
import { StrsService } from '../../services/strs.service';


@Component({
  selector: 'app-strs',
  templateUrl: './strs.component.html',
  providers: [StrsService],
  styleUrls: ['./strs.component.css']
})
export class StrsComponent implements OnInit {

  public strs: Str[];
  public strsFiltered: Str[] = [];

  // Pagination properties
  itemsPerPage: number = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  locusFilter: string;
  chromFilter: Number;;
  repeatFilter: String;
  tempFilter: Number;
  strSelected: Str;



  constructor(
    private strsService: StrsService) { }


  ngOnInit() {
    this.strsService.getStrs()
      .subscribe(
        response => {
          const success = response['success'];
          this.strs = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.strs);
          this.strsFiltered = this.strs;

        }
      );


  }


  // Method of filter
  filter(): void {
    // Array.filter needs a callback function
    // as a parameter
    this.strsFiltered = this.strs.filter(
      str => {
        let locusValid = false;
        let chromValid = false;
        let repeatValid = false;
        let tempValid = false;


        if (this.locusFilter && this.locusFilter !== '') { // filter by locus
          locusValid = str.locus.toLowerCase().
            indexOf(this.locusFilter.toLowerCase()) !== -1;
        } else {
          locusValid = true;
        }

        chromValid = str.chromosome <= this.chromFilter; // filter by chromosome

        if (this.repeatFilter && this.repeatFilter !== '') { // filter by repeaat motif
          repeatValid = str.repeat_motif.toLowerCase().
            indexOf(this.repeatFilter.toLowerCase()) !== -1;
        } else {
          repeatValid = true;
        }

        tempValid = str.annealing_temp <= this.tempFilter; // filter by annealing temp

        return (locusValid && repeatValid && chromValid || tempValid);
      }

    );
  }

  onSelect(str: Str) {
    this.strSelected = str;
    console.log(this.strSelected);
  }

}
