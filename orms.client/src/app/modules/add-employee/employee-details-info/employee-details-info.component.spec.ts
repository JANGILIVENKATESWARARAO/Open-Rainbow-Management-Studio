import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsInfoComponent } from './employee-details-info.component';

describe('EmployeeDetailsInfoComponent', () => {
  let component: EmployeeDetailsInfoComponent;
  let fixture: ComponentFixture<EmployeeDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EmployeeDetailsInfoComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
