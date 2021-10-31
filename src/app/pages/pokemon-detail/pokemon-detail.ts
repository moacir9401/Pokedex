import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/Pokemon.service';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.html',
  styleUrls: ['./pokemon-detail.sass'],
})


export class PokemonDetailComponent implements OnInit {
  pokemonId!: string;
  pokemon: any = {};
  pokemonspecies: any = {};

  constructor(private service: PokemonService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => (this.pokemonId = params['id']));

    this.carregarPokemon();
    this.carregarPokemonSpecies();
    
  }

  private carregarPokemon() {
    this.service.getPokemon(this.pokemonId).subscribe((response:any) => {
      this.pokemon = {

        nome : response.name,
        altura: Math.round((response.height * 0.1 + 0.0001)*100)/100,
        peso: Math.round((response.weight * 0.1 + 0.0001)*100)/100,
        img: response.sprites.front_default,       
        habilidades: response.abilities.map((ability:any) => {
          return ability.ability.name
        }),

        types: response.types
      };

      
    });
  }

  private carregarPokemonSpecies() {
    this.service.getSpeciesPokemon(this.pokemonId).subscribe((response:any) => {
      this.pokemonspecies = {
        descricao : response.flavor_text_entries[9].flavor_text
      }; 
    }); 
    
  }

  ngOnInit(): void {}
}
