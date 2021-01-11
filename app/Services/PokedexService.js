import {ProxyState} from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import {sandboxApi} from "./AxiosService.js"
import pokeApiService from "./PokeApiService.js"
import pokemon from "../Models/Pokemon.js"

class PokedexService {
    constructor(){
        console.log('heyo');
    }
    
    async collectPokemon(id){
        let p = ProxyState.loadedPokemon.find(p => p.id == id)
        ProxyState.loadedPokemon = []
        await sandboxApi.post('',p)
        ProxyState.pokedex = [...ProxyState.pokedex, new Pokemon(p)]
        console.log(ProxyState.loadedPokemon);
    }

    async loadPokedex(){
        let res = await sandboxApi.get('')
        res.data.forEach(p => {
            ProxyState.pokedex = [...ProxyState.pokedex, new Pokemon(p)]

        })
    }
    viewPokemon(id){
        ProxyState.displayPokemon = ProxyState.pokedex.find(p => p.id == id)
        console.log(id);
    }
    // async deletePokemon(id){
    //     console.log(id);
    //     await sandboxApi.delete(id)
        
    // }
}
const pokedexService = new PokedexService()
export default pokedexService