import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LivroFavoritoListarComponent } from './livro-favorito-listar.component';

describe('LivroFavoritoListarComponent', () => {
  let component: LivroFavoritoListarComponent;
  let fixture: ComponentFixture<LivroFavoritoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        HttpClientTestingModule,
       ],
      declarations: [ LivroFavoritoListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroFavoritoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
