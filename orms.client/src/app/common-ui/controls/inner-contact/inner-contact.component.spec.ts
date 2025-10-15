import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerContactComponent } from './inner-contact.component';

describe('InnerContactComponent', () => {
  let component: InnerContactComponent;
  let fixture: ComponentFixture<InnerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
