import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  template: `
    <p>
      {{ movie.title }}
    </p>
  `
})
export class MovieComponent implements OnInit {

  @Input() movie;

  constructor() { }

  ngOnInit() {
  }

}
