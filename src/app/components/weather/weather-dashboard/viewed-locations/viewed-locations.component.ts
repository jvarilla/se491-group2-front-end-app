import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../../../classes/location/location.interface";

@Component({
  selector: 'app-viewed-locations',
  templateUrl: './viewed-locations.component.html',
  styleUrls: ['./viewed-locations.component.scss']
})
export class ViewedLocationsComponent implements OnInit {
  @Input() locations: Location[] | undefined;
  @Output() locationSelected = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void {
  }

  onLocationClicked(location: Location): void {
    this.locationSelected.emit(location);
  }

}
