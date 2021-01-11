import { ProxyState } from "../AppState.js"
import pokeApiService from "../Services/PokeApiService.js"

function _draw(){
    
    let template = ''
    ProxyState.loadedPokemon.forEach(p => template += p.encounterTemplate())
    document.getElementById("encounters").innerHTML = template
}
export default class PokeApiController {

    constructor(){
        ProxyState.on("loadedPokemon", _draw)
        this.get3Pokemon()
    }
    get3Pokemon(){
        try {
            pokeApiService.loadFullPokemon(3)
        } catch(e) {
        console.error(e)
        }
    }

}