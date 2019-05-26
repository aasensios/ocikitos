import { Component, OnInit } from '@angular/core';
import { Sample } from '../../models/sample.model';
import { SamplesService } from '../../services/samples.service';


@Component({
    selector: 'app-samples',
    templateUrl: './samples.component.html',
    providers: [SamplesService],
    styleUrls: ['./samples.component.css']
  })


export class SamplesComponent implements OnInit {

  public samples: Sample[];
  public samplesFiltered: Sample[] = [];
 
  // Pagination properties
  itemsPerPage: number = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  barcodeFilter: string;
  originFilter: String;
  sampleSelected: Sample;



  constructor(
    private samplesService: SamplesService) { }


  ngOnInit() {
    this.samplesService.getSamples()
      .subscribe(
        response => {
          const success = response['success'];
          this.samples = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.samples);
          this.samplesFiltered = this.samples;

        }
      );

    
  }

 
  // Method of filter
  filter(): void {
    // Array.filter needs a callback function
    // as a parameter
    this.samplesFiltered = this.samples.filter(
      sample => {
        let barcodeValid = false;
        let originValid = false;

        if (this.barcodeFilter && this.barcodeFilter !== '') { // filter by locus
          barcodeValid = sample.barcode.toLowerCase().
            indexOf(this.barcodeFilter.toLowerCase()) !== -1;
        } else {
          barcodeValid = true;
        }

        if (this.originFilter && this.originFilter !== '') { // filter by repeaat motif
          originValid = sample.origin.toLowerCase().
            indexOf(this.originFilter.toLowerCase()) !== -1;
        } else {
          originValid = true;
        }


        return (barcodeValid && originValid);
      }

    );
  }

  onSelect(sample: Sample) {
    this.sampleSelected = sample;
    console.log(this.sampleSelected);
  }

}
