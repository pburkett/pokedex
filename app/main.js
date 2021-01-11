import PokeApiController from "./Controllers/PokeApiController.js"
import PokedexController from "./Controllers/PokedexController.js"

class App {
  pokeApiController = new PokeApiController()
  pokedexController = new PokedexController()
}

window["app"] = new App();
