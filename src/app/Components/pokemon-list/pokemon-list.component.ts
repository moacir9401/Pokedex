import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../../services/Pokemon.service'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {
  pokemons:any[] = [];
  limit:number = 12;
  index:number = 0;

  constructor(private service : PokemonService) { }
  onScroll() {
    this.index = this.limit;
    this.limit += 10;
    this.ngOnInit();

  }
  ngOnInit(): void {
    this.service.getPokemons(this.limit,this.index).subscribe((response:any) => {
      response.results.forEach((result: { name: String; }) => {
      this.service.getPokemon(result.name)
      .subscribe((response:any) => {
       
          this.pokemons.push(response); 
          
      })
    });
      
    })
  }

}
