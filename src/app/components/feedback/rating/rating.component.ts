import {Component, QueryList, ViewChildren} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: RatingComponent
    }
  ]
})
export class RatingComponent implements ControlValueAccessor {
  @ViewChildren('ratingBtnToggle') ratingBtnToggles: QueryList<MatButtonToggle> | undefined;

  ratings = [1,2,3,4,5];
  selectedRating: number | null = null;

  touched = false;
  disabled = false;

  onChange = (rating: number) => {};
  onTouched = () => {};


  constructor() { }

  onRatingButtonClicked(rating: number): void {
    this.markAllBtnsToLeftOfRating(rating);
    this.onChange(rating);
  }

  markAllBtnsToLeftOfRating(rating: number) {
    this.ratingBtnToggles?.toArray()
      .sort((a: MatButtonToggle, b: MatButtonToggle) => +a.value - +b.value)
      .forEach((matButtonToggle: MatButtonToggle) => {
        matButtonToggle.checked = +matButtonToggle.value <= rating;
      });
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  writeValue(rating: number): void {
    if (rating === null) {
      this.resetSelection();
    }

    this.selectedRating = rating;
  }

  resetSelection(): void {
    this.ratingBtnToggles?.forEach((btnToggle) => {
      btnToggle.checked = false;
    });
  }
}
