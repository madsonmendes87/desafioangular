import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritoComponent } from './favorito/favorito.component';
import { CompartilharComponent } from './compartilhar/compartilhar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorito',
    component: FavoritoComponent
  },
  {
    path: 'compartilhar',
    component: CompartilharComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
