import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDocumentComponent } from './inner-document.component';

describe('InnerDocumentComponent', () => {
  let component: InnerDocumentComponent;
  let fixture: ComponentFixture<InnerDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [InnerDocumentComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(InnerDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
