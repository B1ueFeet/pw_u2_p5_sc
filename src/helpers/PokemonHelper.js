const getPokeId = () => {
    const pokemons = [getRandom(600), getRandom(600), getRandom(600), getRandom(600)];
    console.log(pokemons);
}

const getPokeIdFacade = () => {
    getPokeId();
}

const getRandom = (max) => {
   return Math.floor(Math.random() * max)+1;
}

const consumirAPI = (max) => {
    return Math.floor(Math.random() * max)+1;
 }

 const getPokeNames = (max) => {
    return Math.floor(Math.random() * max)+1;
 }

export default getPokeIdFacade