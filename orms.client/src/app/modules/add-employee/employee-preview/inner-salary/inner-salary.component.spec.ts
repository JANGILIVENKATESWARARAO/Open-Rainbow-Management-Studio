import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerSalaryComponent } from './inner-salary.component';

describe('InnerSalaryComponent', () => {
  let component: InnerSalaryComponent;
  let fixture: ComponentFixture<InnerSalaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerSalaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
