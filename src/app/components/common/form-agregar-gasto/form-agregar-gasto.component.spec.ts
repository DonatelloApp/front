import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgregarGastoComponent } from './form-agregar-gasto.component';

describe('FormAgregarGastoComponent', () => {
  let component: FormAgregarGastoComponent;
  let fixture: ComponentFixture<FormAgregarGastoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAgregarGastoComponent]
    });
    fixture = TestBed.createComponent(FormAgregarGastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
