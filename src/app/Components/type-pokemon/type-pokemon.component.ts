import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-pokemon',
  templateUrl: './type-pokemon.component.html',
  styleUrls: ['./type-pokemon.component.sass']
})
export class TypePokemonComponent implements OnInit {

  @Input()
  types!:any[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.types);
    
  }

  teste(typeName:string){
    
    if(typeName == "grass")
    return "background-type-grass"
    if(typeName == "poison")
    return "background-type-poison"
    if(typeName == "fire")
    return "background-type-fire"
    if(typeName == "flying")
    return "background-type-flying"
    if(typeName == "water")
    return "background-type-water"
    if(typeName == "bug")
    return "background-type-bug"

    return ""
  }

}
