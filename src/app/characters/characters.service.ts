import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  // get single character detail by id
  getCharacterDetail(id: Number) {
    return this.http.get(`https://swapi.co/api/people/${id}/`);
  }

}
