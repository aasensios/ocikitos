import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from 'src/app/services/must-match.validator';
import { Infraction } from 'src/app/models/infraction.model';

import { InfractionsService } from 'src/app/services/infractions.service';
import { Sample } from 'src/app/models/sample.model';
import { SamplesService } from 'src/app/services/samples.service';
import { IncidentsService } from 'src/app/services/incidents.service';
import { Incident } from 'src/app/models/incident.model';
import { Dog } from 'src/app/models/Dog';
import { DogsService } from 'src/app/services/dogs.service';


@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.component.html',
  styleUrls: ['./infraction.component.css'],
  providers: [InfractionsService, IncidentsService, SamplesService, DogsService],
})

export class InfractionComponent implements OnInit {

  @Input() infraction: Infraction;
  @ViewChild('infractionForm', { static: false }) infractionForm: HTMLFormElement;
  form: FormGroup;
  submitted = false;

  infractions: Infraction[] = [];
  incident: Incident = new Incident();
  sample: Sample = new Sample();
  dog: Dog = new Dog();


  error: string;
  success: boolean;
  message: string;
  editing = false;



  selectedValue: string;

  constructor(
    private infractionsService: InfractionsService,
    private dogsService: DogsService,
    private samplesService: SamplesService,
    private incidentsService: IncidentsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.infraction);
    this.getIncident();
    console.log(this.incident);
    this.getSample();
    console.log(this.sample);


    this.form = this.formBuilder.group({
      location: ['', Validators.required],
      barcode: ['', Validators.required],
    });

    this.error = undefined;
  }


  getSample() {
    this.samplesService.getSample(this.incident.sample_barcode)
      .subscribe(
        response => {
          this.success = response['success'];
          this.sample = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          console.log(this.sample);
        }
      );

  }

  getIncident() {
    this.incidentsService.getIncident(this.infraction.incident_id)
      .subscribe(
        response => {
          this.success = response['success'];
          this.incident = response['data'];
          this.message = response['message'];
        },

        // Error handling
        error => this.error = error,

        // Complete
        () => {
          console.log(this.incident);
        }
      );
  }

  // Convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    console.log(this.infraction);


    // Stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
  }

  addInfraction() {
    console.log(this.infraction);

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
          console.log(this.infraction);

          this.infractionsService.create(this.infraction)
            .subscribe(
              // Success
              response => {
                this.success = response['success'];
                this.infraction = response['data'];
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
  modifyInfraction() {
    this.infractionsService.update(this.infraction)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.infraction = response['data'];
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

  /* deleteIncident(incident: Incident) {
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
  } */

}

