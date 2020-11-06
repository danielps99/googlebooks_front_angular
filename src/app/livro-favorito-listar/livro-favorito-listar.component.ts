import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroFavoritoService } from '../shared/service/livro-favorito.service';

@Component({
  selector: 'app-livro-favorito-listar',
  templateUrl: './livro-favorito-listar.component.html',
  styleUrls: ['./livro-favorito-listar.component.css']
})
export class LivroFavoritoListarComponent implements OnInit {
  subscription: Subscription;
  livrosFavoritos: any[];
  totalRegistros: number;
  maxResult = 10;
  pesquisa: '';
  paginaAtual = 1;
  constructor(private livroFavoritoService: LivroFavoritoService) { }

  ngOnInit(): void {
    this.buscarRegistros(this.pesquisa, 1, this.maxResult);
  }
  /*
  Função faz um delay antes da requisiçao API. Requisita depois que usuario parar de digitar por 800 milisegundos
*/
  filtrarEntradaUsuarioBusca($event) {
    const buscaDigitada = this.pesquisa = $event.target.value;
    const delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));
    Promise.resolve(buscaDigitada)
      .then(delay(800))
      .then(result => {
        if (buscaDigitada === this.pesquisa) {
          this.buscarRegistros(this.pesquisa, 1, this.maxResult);
        }
      }
      );
  }

  buscarRegistros(pesquisa: string, pagina: number, maxResult: number) {
    this.subscription = this.livroFavoritoService.buscarLivrosFavoritosFiltrando(pesquisa, pagina, maxResult).subscribe(res => {
      this.livrosFavoritos = res.itens;
      this.totalRegistros = res.total;
    });
  }

  navegarPagina($event) {
    this.paginaAtual = $event;
    this.buscarRegistros(this.pesquisa, this.paginaAtual, this.maxResult);
  }

  removerFavorito(id: number) {
    this.livroFavoritoService.removerLivroFavorito(id).subscribe(() => {
      this.buscarRegistros(this.pesquisa, this.paginaAtual, this.maxResult);
    });
  }
}