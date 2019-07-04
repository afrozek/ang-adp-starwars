import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[character-card]',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }

}
