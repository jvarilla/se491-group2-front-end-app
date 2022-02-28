import {Component, Input, OnInit} from '@angular/core';
import {Precaution} from "../../../../classes/weather/precaution/precaution.interface";

@Component({
  selector: 'app-precaution',
  templateUrl: './precaution.component.html',
  styleUrls: ['./precaution.component.scss']
})
export class PrecautionComponent implements OnInit {
  @Input() precaution: Precaution | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
