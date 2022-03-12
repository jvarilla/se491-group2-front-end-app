import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../../../../classes/location/location.interface";

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
  @Input() location: Location | undefined;
  @Output() locationClicked = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void {
  }

  onLocationClicked(): void {
    this.locationClicked.emit(this.location);
  }
}
