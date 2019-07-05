import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  encapsulation: ViewEncapsulation.None  // Use to disable CSS Encapsulation for this component

})
export class CharactersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
