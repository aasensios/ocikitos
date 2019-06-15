import { Component, OnInit, Input } from '@angular/core';
import { Str } from '../../models/str.model';
import { StrsService } from '../../services/strs.service';


@Component({
  selector: 'app-strs',
  templateUrl: './strs.component.html',
  styleUrls: ['./strs.component.css'],
  providers: [StrsService],
})
export class StrsComponent implements OnInit {

  public strs: Str[];
  public strsFiltered: Str[] = [];

  error: string;
  success: boolean;
  message: string;
  editing = false;

  // Pagination properties
  itemsPerPage = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  locusFilter: string;
  chromoFilter: number;
  repeatFilter: string;
  strSelected: Str;

  constructor(private dogsService: StrsService) { }

  ngOnInit() {
    this.getStrs();
  }

  getStrs() {
    this.dogsService.getStrs()
      .subscribe(
        response => {
          this.success = response['success'];
          this.strs = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
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
        let repeatValid = false;
        let chromoValid = false;


        if (this.locusFilter && this.locusFilter !== '') { // filter by locus
          locusValid = str.locus.toLowerCase().
            indexOf(this.locusFilter.toLowerCase()) !== -1;
        } else {
          locusValid = true;
        }

        if (this.repeatFilter && this.repeatFilter !== '') { // filter by repeat motif
          repeatValid = str.repeat_motif.toLowerCase().
            indexOf(this.repeatFilter.toLowerCase()) !== -1;
        } else {
          repeatValid = true;
        }

        chromoValid = str.chromosome === this.chromoFilter; // filter by chromosome


        

        return ((locusValid && repeatValid) && chromoValid);
      }

    );
  }

  onSelect(str: Str) {
    this.strSelected = str;
    this.editing = true;
  }

}
