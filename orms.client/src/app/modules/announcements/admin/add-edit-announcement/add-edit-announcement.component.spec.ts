import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementContentComponent } from './add-edit-announcement.component';

describe('AnnouncementContentComponent', () => {
  let component: AnnouncementContentComponent;
  let fixture: ComponentFixture<AnnouncementContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AnnouncementContentComponent]
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
