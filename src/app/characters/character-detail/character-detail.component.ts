import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharactersService } from '../characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  test = 'test';
  characterId: number;
  characterDetails: object;
  characterMoviesDetails: Array<object>;
  loadedDetail: boolean = false;
  loadingText: string =  "1 of 2: Loading Character Details";
  errorLoading: boolean;
  errorLoadingText: string;


  constructor(private charactersService: CharactersService, private route: ActivatedRoute) { 
    this.characterId = this.route.snapshot.params['id'];
  }

  

  ngOnInit() {
    this.fetchCharacterDetail(this.characterId);
  }

  

  private fetchCharacterDetail(id: number) {
    this.charactersService.getCharacterDetail(id)
    .subscribe(detail => {
      console.log(detail.films);
      this.characterDetails = detail;
      this.fetchCharacterMoviesDetails(detail.films)
    }, error => {
      this.errorLoading = true;
      this.errorLoadingText = "Failed to character details";

      // alert(error);
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
    this.loadingText =  "2 of 2: Loading Films Details";
    this.charactersService.getAllMoviesDetails(films)
    .subscribe((res) => {
      console.log("res: ", res);

      this.characterMoviesDetails = res;
      this.loadedDetail = true;

    }, (err)=> {
      this.errorLoading = true;
      this.errorLoadingText = "Failed to films details";

    })

  }

  }

  


