import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpireAnnouncementComponent } from './expire-announcement.component';

describe('ExpireAnnouncementComponent', () => {
  let component: ExpireAnnouncementComponent;
  let fixture: ComponentFixture<ExpireAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpireAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpireAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
