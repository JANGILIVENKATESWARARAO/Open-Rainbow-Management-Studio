import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerInsuranceComponent } from './inner-insurance.component';

describe('InnerInsuranceComponent', () => {
  let component: InnerInsuranceComponent;
  let fixture: ComponentFixture<InnerInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InnerInsuranceComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InnerInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
