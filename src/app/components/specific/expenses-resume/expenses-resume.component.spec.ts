import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesResumeComponent } from './expenses-resume.component';

describe('ExpensesResumeComponent', () => {
  let component: ExpensesResumeComponent;
  let fixture: ComponentFixture<ExpensesResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesResumeComponent]
    });
    fixture = TestBed.createComponent(ExpensesResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
