import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './Components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TypePokemonComponent } from './Components/type-pokemon/type-pokemon.component';
import { PokemonDetailComponent } from './pages/pokemon-detail/pokemon-detail';
import { MainComponent } from './pages/main/main.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    TypePokemonComponent,
    PokemonDetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
