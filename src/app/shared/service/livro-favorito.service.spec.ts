import { TestBed } from '@angular/core/testing';
import { LivroFavoritoService } from './livro-favorito.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LivroFavoritoService', () => {
  let service: LivroFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ],
    });
    service = TestBed.inject(LivroFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
