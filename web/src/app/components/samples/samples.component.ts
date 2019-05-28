import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../../models/sample.model';
import { SamplesService } from '../../services/samples.service';


@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css'],
  providers: [SamplesService],
})
export class SamplesComponent implements OnInit {

  public samples: Sample[];
  public samplesFiltered: Sample[] = [];

  error: string;
  success: boolean;
  message: string;
  editing = false;

  origins: string[] = ['droppings', 'blood', 'saliva'];


  // Pagination properties
  itemsPerPage = 10;
  currentPage: number;
  totalItems: number;

  // Filter properties
  barcodeFilter: string;
  originFilter: string;
  dogFilter: number;
  sampleSelected: Sample;

  constructor(private samplesService: SamplesService) { }

  ngOnInit() {
    this.getSamples();
  }

  getSamples() {
    this.samplesService.getSamples()
      .subscribe(
        response => {
          this.success = response['success'];
          this.samples = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
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
        let dogValid = false;


        if (this.barcodeFilter && this.barcodeFilter !== '') { // filter by barcode
          barcodeValid = sample.barcode.toLowerCase().
            indexOf(this.barcodeFilter.toLowerCase()) !== -1;
        } else {
          barcodeValid = true;
        }
        if (this.originFilter && this.originFilter !== '') { // filter by origin sample
          originValid = sample.origin.toLowerCase().
            indexOf(this.originFilter.toLowerCase()) !== -1;
        } else {
          originValid = true;
        }
/*         dogValid = sample.dog_id === this.dogFilter; // filter by dog id
 */
        

        return (barcodeValid && originValid /* && dogValid */);
      }

    );
  }

  onSelect(sample: Sample) {
    this.sampleSelected= sample;
    this.editing = true;
  }

}
