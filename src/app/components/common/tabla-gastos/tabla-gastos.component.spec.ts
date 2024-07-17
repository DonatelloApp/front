import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGastosComponent } from './tabla-gastos.component';

describe('TablaGastosComponent', () => {
  let component: TablaGastosComponent;
  let fixture: ComponentFixture<TablaGastosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaGastosComponent]
    });
    fixture = TestBed.createComponent(TablaGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
