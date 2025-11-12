import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerRecentLeaveRequestComponent } from './inner-recent-leave-request.component';

describe('InnerRecentLeaveRequestComponent', () => {
  let component: InnerRecentLeaveRequestComponent;
  let fixture: ComponentFixture<InnerRecentLeaveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InnerRecentLeaveRequestComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InnerRecentLeaveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
