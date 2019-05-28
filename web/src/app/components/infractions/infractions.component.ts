import { Component, OnInit, Input } from '@angular/core';
import { Infraction } from '../../models/infraction.model';
import { InfractionsService } from '../../services/infractions.service';


@Component({
  selector: 'app-infractions',
  templateUrl: './infractions.component.html',
  styleUrls: ['./infractions.component.css'],
  providers: [InfractionsService],
})
export class InfractionsComponent implements OnInit {

  public infractions: Infraction[];
  public infractionsFiltered: Infraction[] = [];

  error: string;
  success: boolean;
  message: string;
  editing = false;

  // Pagination properties
  itemsPerPage = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  statusFilter: string;
  idFilter: number;
  infractionSelected: Infraction;

  constructor(private infractionsService: InfractionsService) { }

  ngOnInit() {
    this.getInfractions();
  }

  getInfractions() {
    this.infractionsService.getInfractions()
      .subscribe(
        response => {
          this.success = response['success'];
          this.infractions = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          this.infractionsFiltered = this.infractions;
        }
      );
  }

  // Method of filter
  filter(): void {
    // Array.filter needs a callback function
    // as a parameter
    this.infractionsFiltered = this.infractions.filter(
      infraction => {
        let idValid = false;
        let statusValid = false;
       
        if (this.statusFilter && this.statusFilter !== '') { // filter by chip
          statusValid = infraction.status.toLowerCase().
            indexOf(this.statusFilter.toLowerCase()) !== -1;
        } else {
          statusValid = true;
        }

        idValid = infraction.id === this.idFilter; // filter by chromosome


        return (statusValid && idValid);
      }

    );
  }

  onSelect(infraction: Infraction) {
    this.infractionSelected = infraction;
    this.editing = true;
  }

}

