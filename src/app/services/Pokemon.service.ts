import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemons(limit:Number = 2,index:number = 0 ) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&raw=true&offset=${index}`);
  }

  getPokemon(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getSpeciesPokemon(name:String){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
  }
}
