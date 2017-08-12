import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-movies [movies]="movies"></app-movies>
  `
})
export class AppComponent {

  title = 'change detection';

  movies = [
    {title: 'm1'},
    {title: 'm2'},
    {title: 'm3'}
  ];
}
