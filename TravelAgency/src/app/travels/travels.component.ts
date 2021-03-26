import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  destinations = destinations;

  constructor() { }

  ngOnInit(): void {
  }

}
