import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPayslipsComponent } from './recent-payslips.component';

describe('RecentPayslipsComponent', () => {
  let component: RecentPayslipsComponent;
  let fixture: ComponentFixture<RecentPayslipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RecentPayslipsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(RecentPayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
