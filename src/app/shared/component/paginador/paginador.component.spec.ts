import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorComponent } from './paginador.component';

describe('PaginadorComponent', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('PaginadorComponent validar links gerados', () => {
  let component: PaginadorComponent;
  let fixture: ComponentFixture<PaginadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve gerar apenas um link de pagina', () => {
    component.limit = 3;
    component.total = 1;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(1);
    expect(component.paginasNumeradas).toContain(1);
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(1);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar cinco links de pagina iniciando do 1', () => {
    component.limit = 3;
    component.total = 13;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(5);
    for(let i=1; i<=5; i++){
      expect(component.paginasNumeradas).toContain(i);
    }
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar nove links de pagina iniciando do 1. Tem 1493 retistros', () => {
    component.limit = 3;
    component.total = 1493;
    component.paginaAtual = 1;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(9);
    for(let i=1; i<=9; i++){
      expect(component.paginasNumeradas).toContain(i);
    }
    expect(component.paginaAnterior).toEqual(1);
    expect(component.paginaProxima).toEqual(2);
    expect(component.paginaAtual).toEqual(1);
  });

  it('Deve gerar nove links de pagina iniciando do 2. Tem 125 retistros', () => {
    component.limit = 10;
    component.total = 125;
    component.paginaAtual = 6;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(9);
    for(let i=2; i<=10; i++){
      expect(component.paginasNumeradas).toContain(i);
    }
    expect(component.paginaAnterior).toEqual(5);
    expect(component.paginaProxima).toEqual(7);
    expect(component.paginaAtual).toEqual(6);
  });

  it('Deve gerar nove links de pagina sendo pagina atual = ultima pagina . Tem 500 retistros', () => {
    component.limit = 4;
    component.total = 500;
    component.paginaAtual = 125;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(9);
    for(let i=117; i<=125; i++){
      expect(component.paginasNumeradas).toContain(i);
    }
    expect(component.paginaAnterior).toEqual(124);
    expect(component.paginaProxima).toEqual(125);
    expect(component.paginaAtual).toEqual(125);
  });

  it('Deve gerar zero links. Tem 0 retistros', () => {
    component.limit = 8;
    component.total = 0;
    component.paginaAtual = 0;

    component.gerarLinks();

    expect(component.paginasNumeradas.length).toEqual(0);
    expect(component.paginaAnterior).toEqual(-1);
    expect(component.paginaProxima).toEqual(0);
    expect(component.paginaAtual).toEqual(0);
  });
});