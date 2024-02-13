import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShimmerComponent } from './profile-shimmer.component';

describe('ProfileShimmerComponent', () => {
  let component: ProfileShimmerComponent;
  let fixture: ComponentFixture<ProfileShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileShimmerComponent]
    });
    fixture = TestBed.createComponent(ProfileShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
