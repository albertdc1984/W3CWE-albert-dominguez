async function getPokemons() {
  const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon");
  const results = await pokeApi.json();

  const pokePromises = results.results.map(async ({ url }) => {
    const pokemonData = await fetch(url);
    const pokemon = await pokemonData.json();
    return pokemon;
  });

  const pokeArray = await Promise.all(pokePromises);

  return pokeArray;
}

getPokemons();

export default getPokemons;
