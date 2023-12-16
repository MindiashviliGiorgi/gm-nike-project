import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreGiftsSectionComponent } from './explore-gifts-section.component';

describe('ExploreGiftsSectionComponent', () => {
  let component: ExploreGiftsSectionComponent;
  let fixture: ComponentFixture<ExploreGiftsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreGiftsSectionComponent]
    });
    fixture = TestBed.createComponent(ExploreGiftsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
