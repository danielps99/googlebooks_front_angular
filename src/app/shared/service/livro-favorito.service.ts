import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroFavoritoService {

  constructor(private http: HttpClient) { }

  buscarLivrosFavoritosFiltrando(pesquisa, pagina: number, maxResult: number): Observable<any> {
    let pag = pagina - 1;
    let pesq = pesquisa === undefined || pesquisa === null ? ' ' : pesquisa;
    return this.http.get<any>(
      `${environment.API_URL}livro-favorito/listar?pesquisa=${pesq}&pagina=${pag}&maxResultado=${maxResult}`);
  }

  criarLivroFavorito(livr: any): Observable<any> {
    let favorito = {
      id: null,
      livro: livr
    }
    return this.http.post(`${environment.API_URL}livro-favorito/criar`, favorito);
  }

  removerLivroFavorito(id): Observable<any> {
    return this.http.delete(`${environment.API_URL}livro-favorito/deletar/${id}`);
  }
}
