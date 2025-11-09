import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePreviewDetailsComponent } from './employee-preview-details.component';

describe('EmployeePreviewDetailsComponent', () => {
  let component: EmployeePreviewDetailsComponent;
  let fixture: ComponentFixture<EmployeePreviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EmployeePreviewDetailsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePreviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
