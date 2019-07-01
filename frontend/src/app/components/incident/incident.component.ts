import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Incident } from '../../models/incident.model';

import { IncidentsService } from '../../services/incidents.service';
import { Sample } from 'src/app/models/sample.model';
import { SamplesService } from 'src/app/services/samples.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  providers: [IncidentsService, SamplesService],
})

export class IncidentComponent implements OnInit {

  @Input() incident: Incident;
  @ViewChild('incidentForm', { static: true }) incidentForm: HTMLFormElement;
  form: FormGroup;
  submitted = false;

  incidents: Incident[] = [];
  
  error: string;
  success: boolean;
  message: string;
  editing = false;
  sample: Sample = new Sample();


  selectedValue: string;

  constructor(
    private incidentsService: IncidentsService,
    private samplesService: SamplesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

   

    if (this.incident==null) {
      this.incident = new Incident();
    }

    this.form = this.formBuilder.group({
      location: ['', Validators.required],
      barcode: ['', Validators.required],
      
    });

    this.error = undefined;
  }

  // Convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.incident);


    // Stop here if form is invalid
    if (this.form.invalid) {
     return;
    }
  }

  addIncident() {
    console.log(this.incident);
    this.sample.origin = 'droppings';
    this.sample.barcode = this.incident.sample_barcode;
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
          console.log(this.incident);

          this.incidentsService.create(this.incident)
            .subscribe(
              // Success
              response => {
                this.success = response['success'];
                this.incident = response['data'];
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
      );
  }
  modifyIncident() {
    this.incidentsService.update(this.incident)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.incident = response['data'];
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

  deleteIncident(incident: Incident) {
    this.incidentsService.delete(incident)
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
          alert(this.message);
        }
      );
  }

}

