import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherReadingCardComponent } from './weather-reading-card.component';

describe('WeatherReadingCardComponent', () => {
  let component: WeatherReadingCardComponent;
  let fixture: ComponentFixture<WeatherReadingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherReadingCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherReadingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
