import { Component, OnInit } from '@angular/core';
import { StrsService } from 'src/app/services/strs.service';
import { TableColumn, ButtonType, Width, Height } from 'simplemattable';
import { MatSnackBar } from '@angular/material';
// import { Str } from 'src/app/models/Str';

export interface Str {
  id: number;
  locus: string;
  chromosome: number;
  start_coordenate: number;
  end_coordenate: number;
  repeat_motif: string;
  min_size: number;
  max_size: number;
  min_repeats: number;
  max_repeats: number;
  annealing_temp: number;
}

@Component({
  selector: 'app-strs',
  templateUrl: './strs.component.html',
  styleUrls: ['./strs.component.css'],
  providers: [StrsService]
})
export class StrsComponent implements OnInit {

  // Results from API
  strs: Str[];
  error: string;
  success: boolean;
  message: string;
  SNACKBAR_DURATION_IN_MILISECONDS = 5000;

  // Edit mode
  strSelected: Str;
  editing = false;

  columns = [
    new TableColumn<Str, 'locus'>('Locus', 'locus').withColFilter(),
    new TableColumn<Str, 'chromosome'>('Chromosome', 'chromosome').withColFilter(),
    new TableColumn<Str, 'start_coordenate'>('Start', 'start_coordenate').withColFilter(),
    new TableColumn<Str, 'end_coordenate'>('End', 'end_coordenate').withColFilter(),
    new TableColumn<Str, 'repeat_motif'>('Repeat Motif', 'repeat_motif').withColFilter(),
    new TableColumn<Str, 'min_size'>('Min. Size', 'min_size').withColFilter(),
    new TableColumn<Str, 'max_size'>('Max. Size', 'max_size').withColFilter(),
    new TableColumn<Str, 'min_repeats'>('Min. Size', 'min_repeats').withColFilter(),
    new TableColumn<Str, 'max_repeats'>('Max. Size', 'max_repeats').withColFilter(),
    new TableColumn<Str, 'annealing_temp'>('Annealing Temp.', 'annealing_temp').withColFilter(),
    // new TableColumn<Str, 'edit'>('', 'edit')
    //   .withIcon(() => 'edit')
    //   .withButton(ButtonType.RAISED)
    //   .withButtonColor('primary')
    //   .withOnClick(id => {
    //     this.editing = true;
    //     console.log(this.strSelected);
    //   }),
  ];

  constructor(
    private strsService: StrsService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getStrs();
  }

  /**
   * Consume the API through the service.
   */
  getStrs() {
    this.strsService.getStrs()
      .subscribe(
        response => {
          this.success = response['success'];
          this.strs = response['data'];
          this.message = response['message'];
        },
        error => this.error = error,
        // Complete
        () => {
          this.openSnackBar(this.message, 'OK');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.SNACKBAR_DURATION_IN_MILISECONDS,
    });
  }

}
