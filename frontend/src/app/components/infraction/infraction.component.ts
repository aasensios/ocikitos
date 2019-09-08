import { Component, OnInit, Input, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { Infraction } from 'src/app/models/infraction'
import { InfractionsService } from 'src/app/services/infractions.service'
import { Sample } from 'src/app/models/sample'
import { SamplesService } from 'src/app/services/samples.service'
import { IncidentsService } from 'src/app/services/incidents.service'
import { Incident } from 'src/app/models/incident'
import { Dog } from 'src/app/components/dogs/dog/dog.model'
import { DogsService } from 'src/app/services/dogs.service'
import { OcikitosResponse } from 'src/app/models/response'

@Component({
  selector: 'app-infraction',
  templateUrl: './infraction.component.html',
  styleUrls: ['./infraction.component.css'],
  providers: [InfractionsService, IncidentsService, SamplesService, DogsService]
})
export class InfractionComponent implements OnInit {
  @Input() infraction: Infraction
  @ViewChild('infractionForm', { static: false }) infractionForm: HTMLFormElement
  form: FormGroup
  submitted = false
  infractions: Infraction[] = []
  incident: Incident
  sample: Sample
  dog: Dog
  editing = false
  selectedValue: string
  response: OcikitosResponse

  constructor(
    private infractionsService: InfractionsService,
    private dogsService: DogsService,
    private samplesService: SamplesService,
    private incidentsService: IncidentsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.infraction)
    this.getIncident()
    console.log(this.incident)
    this.getSample()
    console.log(this.sample)

    this.form = this.formBuilder.group({
      location: ['', Validators.required],
      barcode: ['', Validators.required]
    })
  }

  getSample() {
    this.samplesService.getSample(this.incident.sample_barcode).subscribe(
      response => {
        this.sample = response.data
      },
      error => console.log(error),
      () => {
        console.log(this.sample)
      }
    )
  }

  getIncident() {
    this.incidentsService.getIncident(this.infraction.incident_id).subscribe(
      response => {
        this.incident = response.data
      },
      error => console.log(error),
      () => {
        console.log(this.incident)
      }
    )
  }

  // Convenience getter for easy access to form fields
  get f() {
    return this.form.controls
  }

  onSubmit() {
    this.submitted = true
    console.log(this.infraction)

    // Stop here if form is invalid
    if (this.form.invalid) {
      return
    }
  }

  addInfraction() {
    this.samplesService.create(this.sample).subscribe(
      // Success
      response => {
        this.sample = response.data
      },
      error => console.log(error),
      () => {
        alert(this.response.message)
        this.infractionsService.create(this.infraction).subscribe(
          response => {
            this.infraction = response.data
          },
          error => console.log(error),
          () => {
            alert(this.response.message)
          }
        )
      }
    )
  }

  modifyInfraction() {
    this.infractionsService.update(this.infraction).subscribe(
      // Success
      response => {
        this.infraction = response.data
      },

      // Error handling
      error => console.log(error),

      // Complete
      () => {
        alert(this.response.message)
      }
    )
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
