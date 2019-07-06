import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'character-films',
  templateUrl: './character-films.component.html',
  styleUrls: ['./character-films.component.scss']
})
export class CharacterFilmsComponent implements OnInit {

  @Input() movies: any;
  selectedMovie: object = null;

  selectedMovieHandler(movie) {
    this.selectedMovie = movie;
  }

  constructor() { }

  ngOnInit() {
  }

}

