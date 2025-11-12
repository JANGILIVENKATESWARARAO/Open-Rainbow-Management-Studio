import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReporteesComponent } from './my-reportees.component';

describe('MyReporteesComponent', () => {
  let component: MyReporteesComponent;
  let fixture: ComponentFixture<MyReporteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MyReporteesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MyReporteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
