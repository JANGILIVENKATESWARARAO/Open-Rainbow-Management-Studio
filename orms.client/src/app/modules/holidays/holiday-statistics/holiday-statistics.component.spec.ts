import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayStatisticsComponent } from './holiday-statistics.component';

describe('HolidayStatisticsComponent', () => {
  let component: HolidayStatisticsComponent;
  let fixture: ComponentFixture<HolidayStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolidayStatisticsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidayStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
