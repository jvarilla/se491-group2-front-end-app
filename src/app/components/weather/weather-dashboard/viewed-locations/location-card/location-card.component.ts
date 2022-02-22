import {Component, Input, OnInit} from '@angular/core';
import {Location} from "../../../../../classes/location/location.interface";

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() location: Location | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
