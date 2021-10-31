import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from './pages/pokemon-detail/pokemon-detail' 
import {MainComponent} from './pages/main/main.component' 

const routes: Routes = [
  {  path: 'pokemon/:id',  component: PokemonDetailComponent} ,
  {  path: '',  component: MainComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
