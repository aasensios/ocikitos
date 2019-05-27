import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  public titulo:string;

  constructor() {
    this.titulo = "Error! Page not found. Sorry.";
   }

  ngOnInit() {
  }

}
