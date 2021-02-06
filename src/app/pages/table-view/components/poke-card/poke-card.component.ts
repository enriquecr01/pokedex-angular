import { Component, Input, OnInit } from '@angular/core';
import { capitalizeFirstLettter } from '../../../../shared/utils/utils'

@Component({
  selector: 'PokeCard',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  constructor() { }

  @Input() pokemonInfo:any = { }

  capitalize(string) { return capitalizeFirstLettter(string) }

  ngOnInit(): void {
    console.log(this.pokemonInfo)
  }

  ngOnChanges(changes): void {
    console.log(changes)
    
  }

}
