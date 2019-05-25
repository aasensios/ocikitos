import { Component, OnInit } from '@angular/core';
import { Dog } from '../../models/dog.model';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  providers: [DogsService],
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  public dogs: Dog[];

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsService.getDogs()
      .subscribe(
        response => {
          const success = response['success'];
          this.dogs = response['data'];
          const message = response['message'];

          // Debugging
          console.log(success);
          console.log(message);
          console.log(this.dogs);
        }
      );
  }

}
