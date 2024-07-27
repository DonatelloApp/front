import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarIngresoComponent } from './form-agregar-ingreso.component';

describe('FormAgregarIngresoComponent', () => {
  let component: FormAgregarIngresoComponent;
  let fixture: ComponentFixture<FormAgregarIngresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAgregarIngresoComponent]
    });
    fixture = TestBed.createComponent(FormAgregarIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
