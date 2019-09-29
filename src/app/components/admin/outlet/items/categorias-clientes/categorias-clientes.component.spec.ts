import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasClientesComponent } from './categorias-clientes.component';

describe('CategoriasClientesComponent', () => {
  let component: CategoriasClientesComponent;
  let fixture: ComponentFixture<CategoriasClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
