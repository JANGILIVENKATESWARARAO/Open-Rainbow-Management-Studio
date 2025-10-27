import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementContentComponent } from './add-announcement.component';

describe('AnnouncementContentComponent', () => {
  let component: AnnouncementContentComponent;
  let fixture: ComponentFixture<AnnouncementContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnnouncementContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncementContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
