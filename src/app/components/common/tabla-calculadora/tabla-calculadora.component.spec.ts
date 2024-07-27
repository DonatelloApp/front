import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCalculadoraComponent } from './tabla-calculadora.component';

describe('TablaCalculadoraComponent', () => {
  let component: TablaCalculadoraComponent;
  let fixture: ComponentFixture<TablaCalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaCalculadoraComponent]
    });
    fixture = TestBed.createComponent(TablaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
