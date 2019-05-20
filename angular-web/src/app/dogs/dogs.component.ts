import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../shared/dog.model';
import { DOGS } from '../services/mock.dogs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  public dogs: Dog[];
  public selectedDog : Dog;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dogs = DOGS;
    console.log(this.dogs);
  }

  gotoDetail(): void {
    this.router.navigate(['/dog-detail', this.selectedDog.id]);
  }

  delete(dog: Dog): void {
    /* this.friendService
        .delete(friend)
        .subscribe(() => {
          this.friends = this.friends.filter(e => e !== friend);
          if (this.selectedFriend === friend) { this.selectedFriend = null; }
        }); */
        
  }

}
