import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../shared/dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  public dogs: Dog[];
  public dog = Dog;

 

  dogsaux:any = [];

  constructor(public rest:DogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDogs();

  }

  getDogs() {
    this.dogsaux = [];
    this.dogs = [];
    this.rest.getDogs().subscribe((data:{}) => {
      this.dogsaux = data;
      console.log(data);
      console.log(this.dogsaux);

     

      console.log(this.dogs);
    });
  }

  /* add() {
    this.router.navigate(['/product-add']);
  }

  delete(id) {
    this.rest.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  } */

}