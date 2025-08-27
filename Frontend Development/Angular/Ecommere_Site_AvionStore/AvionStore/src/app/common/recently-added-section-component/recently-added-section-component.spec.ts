import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedSectionComponent } from './recently-added-section-component';

describe('RecentlyAddedSectionComponent', () => {
  let component: RecentlyAddedSectionComponent;
  let fixture: ComponentFixture<RecentlyAddedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyAddedSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyAddedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
