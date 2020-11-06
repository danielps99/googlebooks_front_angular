import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroFavoritoListarComponent } from './livro-favorito-listar/livro-favorito-listar.component';
import { LivroListarComponent } from './livro-listar/livro-listar.component';

const routes: Routes = [
  { path: '', component: LivroFavoritoListarComponent },
  { path: 'livro-listar', component: LivroListarComponent}
];

@NgModule({
  imports: [
    // CommonModule,
    // RouterModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
