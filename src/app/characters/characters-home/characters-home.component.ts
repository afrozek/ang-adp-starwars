import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-characters-home',
  templateUrl: './characters-home.component.html',
  styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit {
  
  characters = []

  constructor(private charactersService: CharactersService) { 
    
  }

  ngOnInit() {
    this.fetchCharacters();
  }

  private fetchCharacters() {
     return this.characters = this.charactersService.getCharactersList();
  }

}
