import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneInputComponent } from './phoneInput.component';

describe('PhoneInputComponent', () => {
  let component: PhoneInputComponent;
  let fixture: ComponentFixture<PhoneInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneInputComponent]
    });
    fixture = TestBed.createComponent(PhoneInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
