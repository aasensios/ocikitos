import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dog } from '../shared/dog.model';
import { DOGS } from '../services/mock.dogs';
import { DogService } from '../services/dog.service';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  public dogs: Dog[];
  public selectedDog : Dog;

  constructor(
    private router: Router,
    private dogService: DogService) { }
  
    
      
  ngOnInit() {
     this.getAllDogs();
      
/*     this.dogsdogs = DOGS;
 */    console.log(this.dogs);
  }

  gotoDetail(): void {
    this.router.navigate(['/dog-detail', this.selectedDog.id]);
  }

  getAllDogs(): void {
    this.dogService
      .getAllDogs()
      .subscribe(dogs => this.dogs = dogs);
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
