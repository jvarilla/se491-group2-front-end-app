import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @Output() ratingChange = new EventEmitter<number>()
  ratings = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

  onRatingButtonClicked(rating: number): void {
    this.ratingChange.emit(rating);
  }

}
