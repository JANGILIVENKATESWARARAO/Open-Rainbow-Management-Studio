import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerJobComponent } from './inner-job.component';

describe('InnerJobComponent', () => {
  let component: InnerJobComponent;
  let fixture: ComponentFixture<InnerJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
