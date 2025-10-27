import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenteesComponent } from './presentees.component';

describe('PresenteesComponent', () => {
  let component: PresenteesComponent;
  let fixture: ComponentFixture<PresenteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresenteesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
