import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.fetchCharacterDetail(1);
  }

  private fetchCharacterDetail(id: number) {
    this.charactersService.getCharacterDetail(1)
    .subscribe(detail => {
      console.log(detail);
    }, error => {
      alert(error);
      console.log(error);
    })
  }

}
