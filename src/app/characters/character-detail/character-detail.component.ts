import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  test = 'test';
  characterDetails: object;
  characterMoviesDetails: Array<object>;


  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.fetchCharacterDetail(1);
  }

  private fetchCharacterDetail(id: number) {
    this.charactersService.getCharacterDetail(1)
    .subscribe(detail => {
      console.log(detail.films);
      this.characterDetails = detail;
      this.fetchCharacterMoviesDetails(detail.films)
    }, error => {
      alert(error);
      console.log(error);
    })
  }

  // private fetchCharacterMoviesDetails() {
  //   this.charactersService.getAllMoviesDetails()
  //   .subscribe(([res1, res2, res3]) => {
  //     console.log("res: ", res1)
  //     console.log("res: ",  res2)
  //     console.log("res: ",  res3)
  //   },
  //   error => {      
  //     console.log("error: ", error);
  //   })

  // }

  private fetchCharacterMoviesDetails(films: Array<string>) {
    this.charactersService.getAllMoviesDetails(films)
    .subscribe((res) => {
      console.log("res: ", res);

      this.characterMoviesDetails = res;

    })

  }

  }

  


