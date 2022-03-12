import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-weather-modal',
  templateUrl: './weather-modal.component.html',
  styleUrls: ['./weather-modal.component.scss']
})
export class WeatherModalComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<Component>,
              @Inject(MAT_DIALOG_DATA) data: unknown) {
  }

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }
}
