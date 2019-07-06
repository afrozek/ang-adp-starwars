import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { 
    
  }

  getCharactersList() {
    return [
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

  // get single character detail by id
  getCharacterDetail(id: Number) {
    return this.http.get(`https://swapi.co/api/people/${id}/`);
  }


  getAllMoviesDetails(films: Array<string>) {

    console.log(films)

    let filmsObservablesList = films.map((film)=> {
      return this.http.get(film)
    })

    console.log(filmsObservablesList)

    return forkJoin(filmsObservablesList)

 
  }




  

}
