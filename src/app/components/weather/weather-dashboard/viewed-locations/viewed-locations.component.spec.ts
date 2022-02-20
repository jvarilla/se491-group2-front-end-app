import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedLocationsComponent } from './viewed-locations.component';

describe('ViewedLocationsComponent', () => {
  let component: ViewedLocationsComponent;
  let fixture: ComponentFixture<ViewedLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewedLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
