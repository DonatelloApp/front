import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedorInfoComponent } from './proveedorInfo.component';

describe('ProveedorInfoComponent', () => {
  let component: ProveedorInfoComponent;
  let fixture: ComponentFixture<ProveedorInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProveedorInfoComponent]
    });
    fixture = TestBed.createComponent(ProveedorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
