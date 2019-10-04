import { TestBed } from '@angular/core/testing';

import { ProductosCompraService } from './productos-compra.service';

describe('ProductosCompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosCompraService = TestBed.get(ProductosCompraService);
    expect(service).toBeTruthy();
  });
});
