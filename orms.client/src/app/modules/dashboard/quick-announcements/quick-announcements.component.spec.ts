import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickAnnouncementsComponent } from './quick-announcements.component';

describe('QuickAnnouncementsComponent', () => {
  let component: QuickAnnouncementsComponent;
  let fixture: ComponentFixture<QuickAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickAnnouncementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
