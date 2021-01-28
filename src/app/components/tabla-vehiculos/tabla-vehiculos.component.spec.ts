import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaVehiculosComponent } from './tabla-vehiculos.component';

describe('TablaVehiculosComponent', () => {
  let component: TablaVehiculosComponent;
  let fixture: ComponentFixture<TablaVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
