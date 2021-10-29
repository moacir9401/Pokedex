import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/Pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemons:any[] = [];


  constructor(private service : PokemonService) { }

  ngOnInit(): void {
    this.service.getPokemons().subscribe((response:any) => {
      response.results.forEach((result: { name: String; }) => {
      this.service.getPokemon(result.name)
      .subscribe((response:any) => {
          this.pokemons.push(response);
          console.log(this.pokemons);
          
      })
    });
      
    })
  }

}
