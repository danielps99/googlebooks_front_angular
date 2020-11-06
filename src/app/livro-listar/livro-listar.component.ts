import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroFavoritoService } from '../shared/service/livro-favorito.service';
import { LivroService } from '../shared/service/livro.service';

@Component({
  selector: 'app-livro-listar',
  templateUrl: './livro-listar.component.html',
  styleUrls: ['./livro-listar.component.css']
})
export class LivroListarComponent implements OnInit {
  subscription: Subscription;
  livros: any[];
  totalRegistros: number;
  maxResult = 10;
  pesquisa: '';

  constructor(private livroService: LivroService, private livroFavoritoService: LivroFavoritoService) { }

  ngOnInit(): void { }

  /*
  Função faz um delay antes da requisiçao API. Requisita depois que usuario parar de digitar por 800 milisegundos
*/
  filtrarEntradaUsuarioBusca($event) {
    const buscaDigitada = this.pesquisa = $event.target.value.trim();
    if(this.pesquisa.length == 0){
      this.livros = [];
      this.totalRegistros = 0;
      return;
    } 
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
    this.subscription = this.livroService.buscarLivrosFiltrando(pesquisa, pagina, maxResult).subscribe(res => {
      this.livros = res.itens;
      this.totalRegistros = res.total;
    });
  }

  navegarPagina($event) {
    this.buscarRegistros(this.pesquisa, $event, this.maxResult);
  }

  criarFavorito(livro: any) {
    this.livroFavoritoService.criarLivroFavorito(livro).subscribe(() => {
      livro.favorit = true;
    });
  }
}
