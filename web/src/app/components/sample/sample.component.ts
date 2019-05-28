import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Sample } from '../../models/sample.model';
import { Color } from '../../models/color.model';
import { Breed } from '../../models/breed.model';

import { SamplesService } from '../../services/samples.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  providers: [SamplesService],
})

export class SampleComponent implements OnInit {

  @Input() sample: Sample;
  @ViewChild('sampleForm') sampleForm: HTMLFormElement;
  form: FormGroup;
  submitted = false;

  samples: Sample[] = [];
  error: string;
  success: boolean;
  message: string;
  editing = false;

  origins: string[] = ['droppings', 'blood', 'saliva'];

  selectedValue: string;

  constructor(
    private samplesService: SamplesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    if (this.sample==null) {
      this.sample = new Sample();
    }

    this.form = this.formBuilder.group({
      sequence: ['', null],
      
    });

    this.error = undefined;
  }

  // Convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.sample);


    // Stop here if form is invalid
    if (this.form.invalid) {
     return;
    }
  }

  addSample() {
    this.samplesService.create(this.sample)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.sample = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          alert(this.message);
        }
      );
  }

  modifySample() {
    this.samplesService.update(this.sample)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.sample = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          alert(this.message);
        }
      );
  }

  /* deleteSample(sample: Sample) {
    this.samplesService.delete(sample)
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
          alert(this.message);
        }
      );
  } */

}

