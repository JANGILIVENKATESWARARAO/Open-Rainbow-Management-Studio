import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickActivitiesComponent } from './quick-activities.component';

describe('QuickActivitiesComponent', () => {
  let component: QuickActivitiesComponent;
  let fixture: ComponentFixture<QuickActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [QuickActivitiesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(QuickActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
