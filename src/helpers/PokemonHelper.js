const getPokeId = () => {
    return [getRandom(600), getRandom(600), getRandom(600), getRandom(600)];
}

const getRandom = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const consumirAPI = async (id) => {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
}

const getName = async (id) => {
    const data = await consumirAPI(id);
    return data.name;
}

const getPokeNames = async ([p1, p2, p3, p4]) => {
    const pk1 = { id: p1, nombre: await getName(p1), }
    const pk2 = { id: p2, nombre: await getName(p2), }
    const pk3 = { id: p3, nombre: await getName(p3), }
    const pk4 = { id: p4, nombre: await getName(p4), }
    const arreglo = [pk1, pk2, pk3, pk4];
    return arreglo;
};

const getPokeIdFacade = async () => {
    return await getPokeNames(getPokeId());
}

export default getPokeIdFacade