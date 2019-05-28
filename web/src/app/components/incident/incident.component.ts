import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../../services/must-match.validator';
import { Incident } from '../../models/incident.model';

import { IncidentsService } from '../../services/incidents.service';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css'],
  providers: [IncidentsService],
})

export class IncidentComponent implements OnInit {

  @Input() incident: Incident;
  @ViewChild('incidentForm') incidentForm: HTMLFormElement;
  form: FormGroup;
  submitted = false;

  incidents: Incident[] = [];
  
  error: string;
  success: boolean;
  message: string;
  editing = false;

  selectedValue: string;

  constructor(
    private incidentsService: IncidentsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

   

    if (this.incident==null) {
      this.incident = new Incident();
    }

    this.form = this.formBuilder.group({
      location: ['', Validators.required],
      
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

  /* addDog() {
    this.dogsService.create(this.dog)
      .subscribe(
        // Success
        response => {
          this.success = response['success'];
          this.dog = response['data'];
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

