import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueResumeComponent } from './revenue-resume.component';

describe('RevenueResumeComponent', () => {
  let component: RevenueResumeComponent;
  let fixture: ComponentFixture<RevenueResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevenueResumeComponent]
    });
    fixture = TestBed.createComponent(RevenueResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
