import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdynCheckboxComponent } from './edyn-checkbox.component';

describe('EdynCheckboxComponent', () => {
  let component: EdynCheckboxComponent;
  let fixture: ComponentFixture<EdynCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [EdynCheckboxComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(EdynCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
