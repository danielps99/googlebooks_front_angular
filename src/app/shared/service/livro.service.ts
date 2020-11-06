import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient) { }
  
  buscarLivrosFiltrando(pesquisa, pagina: number, maxResult: number) {
    let pag = pagina -1;
    return this.http.get<any>(
      `${environment.API_URL}livro/listar?pesquisa=${pesquisa}&pagina=${pag}&maxResultado=${maxResult}`);
  }
}
