import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerOtherComponent } from './inner-other.component';

describe('InnerOtherComponent', () => {
  let component: InnerOtherComponent;
  let fixture: ComponentFixture<InnerOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnerOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InnerOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
