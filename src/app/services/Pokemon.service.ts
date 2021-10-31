import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10?raw=true`);
  }

  getPokemon(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getSpeciesPokemon(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  }
}
