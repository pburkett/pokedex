
export default class Pokemon {
    constructor({name, img, sprites, id, types}) {
    this.name = name
    this.img = img || sprites.other['dream_world']['front_default']
    this.id = id 
    this.types = types
    
}

encounterTemplate(){
    return `
                <div class="col-3 bg-success encounter-card">
                    <button onclick="app.pokedexController.collectPokemon('${this.id}')" class="bg-success encounter-img d-flex justify-content-center align-items-end" style="background-image: url(${this.img});">
                        <h3 class="text-center">Click to capture!</h3></button>
                    <h3 class="text-center my-4 text-capitalize">${this.name}</h3>
                    <h5 class="text-center my-4">Types: ${this.displayTypes()}</h5>
                </div>
                `
}
pokedexTemplate(){
    return `
                <div class="">
                    <button onclick="app.pokedexController.viewPokemon('${this.id}')" class="bg-success pokedex-img d-flex justify-content-center align-items-end" style="background-image: url(${this.img});"></button>
                </div>
    `
}
displayTemplate(){
    return `
                <div class="display-img bg-success d-flex justify-content-center align-items-end" style="background-image: url(${this.img});">
                    <h5 class="text-center"></h3>
                </div>
                <h5 class="text-center my-4 text-capitalize">${this.name}</h3>
                <p class="text-center my-4">Types: ${this.displayTypes()}</p>
            `
}
displayTypes(){
    let template;
    let typeList = []
    this.types.forEach(t => {
        typeList.push(t.type.name[0].toUpperCase() + t.type.name.slice(1))
        template = typeList.join(',  ')
    } )
    return template
}
}