import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerWorkComponent } from './inner-work.component';

describe('InnerWorkComponent', () => {
  let component: InnerWorkComponent;
  let fixture: ComponentFixture<InnerWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
