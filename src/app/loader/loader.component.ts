import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input() loadingText: string;
  @Input() errorText: string;
  @Input() error;

  // error = true;
  constructor() { }

  ngOnInit() {
  }

}
