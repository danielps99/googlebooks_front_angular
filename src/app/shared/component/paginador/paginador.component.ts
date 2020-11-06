import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginador',
  templateUrl: './paginador.component.html',
  styleUrls: ['./paginador.component.css']
})
export class PaginadorComponent implements OnInit {

  @Input() limit: number; // QUANTIDA LIMITE POR PAGINA
  @Input('total') set value(inputValue: number) { // TOTAL DE REGISTROS PARA PAGINAR
    this.total = inputValue;
    this.gerarLinks();
  }
  @Output('navegar') navegar = new EventEmitter();

  total: number;
  paginasNumeradas: Array<number>;
  paginaAnterior: number;
  paginaAtual: number;
  paginaProxima: number;

  constructor() { }

  ngOnInit() {
    setTimeout(
      () => {
        this.paginaAtual = 1;
        this.gerarLinks();
      }, 2000
    );
  }

  paginar(pagina: number, $event: any) {
    $event.preventDefault();
    this.navegar.emit(pagina);
    this.paginaAtual = pagina;
    this.gerarLinks();
  }

  gerarLinks() {
    this.paginaAnterior = this.paginaAtual === 1 ? 1 : this.paginaAtual - 1;
    const qtdPaginasMostrar = 9;
    this.paginasNumeradas = [];
    const inicio = this.buscarInicioPaginador(qtdPaginasMostrar);
    const fim = this.buscarFimPaginador(inicio, qtdPaginasMostrar);
    for (let i = inicio; i <= fim; i++) {
      this.paginasNumeradas.push(i);
    }
    this.paginaProxima = this.paginaAtual >= fim ? this.paginaAtual : this.paginaAtual + 1;
  }

  buscarInicioPaginador(qtdPaginas) {
    const inicio = this.paginaAtual - Math.floor(qtdPaginas / 2);
    if (inicio <= 1) {
      return 1;
    }
    const qtdTotalPaginas = Math.ceil(this.total / this.limit);
    if (inicio + qtdPaginas > qtdTotalPaginas ) {
      return qtdTotalPaginas - qtdPaginas + 1;
    }
    return inicio;
  }

  buscarFimPaginador(inicio, qtdPaginasMostrar) {
    const fim = Math.ceil(this.total / this.limit);
    if (fim >= qtdPaginasMostrar) {
      return inicio + qtdPaginasMostrar - 1;
    }
    return fim;
  }

//   buscarQuantidadePaginasMostradas() {
//     return document.body.clientWidth > 360 ? 5 : 3;
//   }
}
