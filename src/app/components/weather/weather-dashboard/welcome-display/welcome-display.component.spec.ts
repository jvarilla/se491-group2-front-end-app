import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeDisplayComponent } from './welcome-display.component';

describe('WelcomeDisplayComponent', () => {
  let component: WelcomeDisplayComponent;
  let fixture: ComponentFixture<WelcomeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
