import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../../services/pokemon-service.service'
import { capitalizeFirstLettter } from '../../shared/utils/utils'


@Component({
  selector: 'TableView',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {

  displayedColumns: string[] = ['name'];
  dataSource = [];
  pokemonInformation:any = {}

  constructor(private pokemonService: PokemonService) { }

  async ngOnInit() {
    let list = await this.pokemonService.getPokemons().toPromise()
    this.dataSource = list.results
  }
  
  capitalize(string) { return capitalizeFirstLettter(string) }

  async infoPokemon(url) {
    console.log(url)
    this.pokemonInformation = await this.pokemonService.getPokemon(url).toPromise()
  }

}
