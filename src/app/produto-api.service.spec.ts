import { TestBed } from '@angular/core/testing';

import { ProdutoApiService } from './produto-api.service';

describe('ProdutoApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoApiService = TestBed.get(ProdutoApiService);
    expect(service).toBeTruthy();
  });
});