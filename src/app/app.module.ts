import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './Components/pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TypePokemonComponent } from './Components/type-pokemon/type-pokemon.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    TypePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
