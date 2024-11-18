const tipo1 = document.querySelector("#Tipo1")
const tipo2 = document.querySelector("#Tipo2")
const imgPoke = document.querySelector("#imgPoke")
const idPoke = document.querySelector("#idPoke")
const nomePoke = document.querySelector("#NomePoke")
const pesoPoke = document.querySelector("#PesoPoke")
const alturaPoke = document.querySelector("#AlturaPoke")
const audioPoke = document.querySelector("#audioPoke")
const formNome = document.querySelector("#FormNome")
const input = document.querySelector("#inputNome")
const btnA = document.querySelector("#btnA")
const btnP = document.querySelector("#btnP")

let IDPokemon = 1

const fetchpokemon = async (pokemon) => {
    const APIresponse= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await APIresponse.json()
    return data
}

const showPokemon = async (pokemon) => {
    const infoPokemon = await fetchpokemon(pokemon)
    IDPokemon = infoPokemon.id
    idPoke.innerHTML = infoPokemon.id
    nomePoke.innerHTML = infoPokemon.name
    imgPoke.src = infoPokemon.sprites.front_default
    tipo1.innerHTML = infoPokemon.types[0].type.name
    tipo2.innerHTML = ''
    tipo2.innerHTML = infoPokemon.types[1].type.name
    audioPoke.src = infoPokemon.cries.latest
    alturaPoke.innerHTML = infoPokemon.height
    pesoPoke.innerHTML = infoPokemon.weight
}


formNome.addEventListener("submit", (event) => {
    event.preventDefault();
    showPokemon(input.value.toLowerCase())
})

btnA.addEventListener("click", (event) => {
    event.preventDefault();
    if(IDPokemon>1){
        IDPokemon -=1    
        showPokemon(IDPokemon)
    }
})

btnP.addEventListener("click", (event) => {
    event.preventDefault();
    if(IDPokemon>1){
        IDPokemon +=1    
        showPokemon(IDPokemon)
    }
})

showPokemon('nidoking')
audioPoke.play()