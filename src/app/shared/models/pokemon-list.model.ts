import { PokemonUrl } from './pokemon-url.model'

export interface PokemonList {
    count?: number;
    next?: string;
    previous?: string;
    results: PokemonUrl[]
}