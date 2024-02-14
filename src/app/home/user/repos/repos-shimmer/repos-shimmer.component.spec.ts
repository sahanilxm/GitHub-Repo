import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposShimmerComponent } from './repos-shimmer.component';

describe('ReposShimmerComponent', () => {
  let component: ReposShimmerComponent;
  let fixture: ComponentFixture<ReposShimmerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReposShimmerComponent]
    });
    fixture = TestBed.createComponent(ReposShimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
