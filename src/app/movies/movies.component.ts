import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies',
  template: `
    <h1>List of movies</h1>
    <app-movie *ngFor="let m of movies" [movie]="m"></app-movie>
  `
})
export class MoviesComponent implements OnInit {

  @Input() movies;

  constructor() { }

  ngOnInit() {
  }

}
