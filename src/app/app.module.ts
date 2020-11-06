import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListarComponent } from './livro-listar/livro-listar.component';
import { LivroFavoritoListarComponent } from './livro-favorito-listar/livro-favorito-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginadorComponent } from './shared/component/paginador/paginador.component';
import { FormsModule } from '@angular/forms';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    LivroListarComponent,
    LivroFavoritoListarComponent,
    PaginadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',
      cancelText: 'Não',
      popoverTitle: 'Você tem certeza?',
      confirmText: 'Sim',
      placement: 'left',
      confirmButtonType: 'danger',
      cancelButtonType: 'outline-secondary',
      appendToBody: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
