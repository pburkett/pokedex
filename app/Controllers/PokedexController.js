import {ProxyState} from "../AppState.js"
import { pokeApi } from "../Services/AxiosService.js"
import pokeApiService from "../Services/PokeApiService.js"
import pokedexService from "../Services/PokedexService.js"


function _draw(){
    let template = ''
    
    ProxyState.pokedex.forEach(p => {
        template += p.pokedexTemplate()
    })
    document.getElementById("pokedex").innerHTML = template
}
function _drawDisplay(){
    document.getElementById("display-pokemon").innerHTML = ProxyState.displayPokemon.displayTemplate()
}



export default class PokedexController {
    constructor(){
        
        this.loadPokedex()
        ProxyState.on('pokedex', _draw)
        ProxyState.on("displayPokemon", _drawDisplay)
    }
    collectPokemon(id){
        try {
            pokedexService.collectPokemon(id)
            pokeApiService.loadFullPokemon(3)
        } catch(e){
            console.error(e)
        }
    }
    loadPokedex() {
    try {
        pokedexService.loadPokedex()
    } catch {
        console.error(e)
    }

    }
    viewPokemon(id){
        try {
            pokedexService.viewPokemon(id)
        } catch {
            console.error(e)
        }
    }
}