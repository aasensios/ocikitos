import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  public titulo: string

  constructor() {
    this.titulo = 'Error! Page not found. Sorry.'
  }

  ngOnInit() {
  }

}
