import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import {pokeApi} from "./AxiosService.js"

class PokeApiService {
    constructor(){
        this.pokemonListRange = 100
    }
    
    _generateOffset(){
        return Math.floor(Math.random() * this.pokemonListRange)
    }
    async loadFullPokemon(num){
        let fullPokemon
        for (let i = 0; i < num; i++){
            fullPokemon = await pokeApi.get(`${this._generateOffset()}/`)
            ProxyState.loadedPokemon = [...ProxyState.loadedPokemon, new Pokemon(fullPokemon.data)]
        }   
    }
}
const pokeApiService = new PokeApiService()
export default pokeApiService