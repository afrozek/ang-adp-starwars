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
