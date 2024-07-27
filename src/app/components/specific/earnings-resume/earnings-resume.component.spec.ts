import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsResumeComponent } from './earnings-resume.component';

describe('EarningsResumeComponent', () => {
  let component: EarningsResumeComponent;
  let fixture: ComponentFixture<EarningsResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarningsResumeComponent]
    });
    fixture = TestBed.createComponent(EarningsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
