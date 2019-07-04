import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  
  characters = []

  constructor() { 
    
  }

  ngOnInit() {
    this.fetchCharacters();
  }

  private fetchCharacters() {
     return this.characters = [
      {
        id: 1,
        name: "Luke Skywalker",
        url: "https://swapi.co/api/people/1/",
        cardImgPath: "/assets/images/luke-skywalker-card-render.svg"
      },
      {
        id: 4,
        name: "Darth Vader",
        url: "https://swapi.co/api/people/4/",
        cardImgPath: "/assets/images/darth-vader-card-render.svg",
        id: 4
      },
      {
        id: "unknown",
        name: "Obi-wan Kenobi",
        url: "https://swapi.co/api/people/unknown/",
        cardImgPath: "/assets/images/obi-wan-kenobi-card-render.svg"
      },
      {
        id: 3,
        name: "R2-D2",
        url: "https://swapi.co/api/people/3/",
        cardImgPath: "/assets/images/r2-d2-card-render.svg"
      }
    ];
  }

}
