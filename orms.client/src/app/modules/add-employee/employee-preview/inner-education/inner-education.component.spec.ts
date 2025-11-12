import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerEducationComponent } from './inner-education.component';

describe('InnerEducationComponent', () => {
  let component: InnerEducationComponent;
  let fixture: ComponentFixture<InnerEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InnerEducationComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InnerEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
