import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitListingComponent } from './submit-listing-component';

describe('SubmitListingComponent', () => {
  let component: SubmitListingComponent;
  let fixture: ComponentFixture<SubmitListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmitListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
