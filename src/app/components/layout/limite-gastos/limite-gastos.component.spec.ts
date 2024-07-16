import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteGastosComponent } from './limite-gastos.component';

describe('LimiteGastosComponent', () => {
  let component: LimiteGastosComponent;
  let fixture: ComponentFixture<LimiteGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimiteGastosComponent]
    });
    fixture = TestBed.createComponent(LimiteGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
