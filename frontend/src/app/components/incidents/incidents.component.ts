import { Component, OnInit, Input } from '@angular/core';
import { Incident } from 'src/app/models/incident.model';
import { IncidentsService } from 'src/app/services/incidents.service';


@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  providers: [IncidentsService],
})
export class IncidentsComponent implements OnInit {

  public incidents: Incident[];
  public incidentsFiltered: Incident[] = [];

  error: string;
  success: boolean;
  message: string;
  editing = false;

  // Pagination properties
  itemsPerPage = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  locationFilter: string;
  barcodeFilter: string;
  incidentSelected: Incident;

  constructor(private incidentsService: IncidentsService) { }

  ngOnInit() {
    this.getIncidents();
  }

  getIncidents() {
    this.incidentsService.getIncidents()
      .subscribe(
        response => {
          this.success = response['success'];
          this.incidents = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          this.incidentsFiltered = this.incidents;
        }
      );
  }

  // Method of filter
  filter(): void {
    // Array.filter needs a callback function
    // as a parameter
    this.incidentsFiltered = this.incidents.filter(
      incident => {
        let locationValid = false;
        let barcodeValid = false;
        let ownerDniValid = false;
        let ownerNameValid = false;


        if (this.locationFilter && this.locationFilter !== '') { // filter by chip
          locationValid = incident.location.toLowerCase().
            indexOf(this.locationFilter.toLowerCase()) !== -1;
        } else {
          locationValid = true;
        }

        if (this.barcodeFilter && this.barcodeFilter !== '') { // filter by name
          barcodeValid = incident.sample_barcode.toLowerCase().
            indexOf(this.barcodeFilter.toLowerCase()) !== -1;
        } else {
          barcodeValid = true;
        }

        return (locationValid && barcodeValid);
      }

    );
  }

  onSelect(incident: Incident) {
    this.incidentSelected = incident;
    this.editing = true;
  }

}

