import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PokemonList } from '../shared/models/pokemon-list.model';
import { Pokemon } from '../shared/models/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get<PokemonList>(`${environment.API_URL}/pokemon/`);
  }

  getPage(url) {
    return this.http.get(url);
  }

  getPokemon(url) {
    return this.http.get<Pokemon>(url);
  }
}
