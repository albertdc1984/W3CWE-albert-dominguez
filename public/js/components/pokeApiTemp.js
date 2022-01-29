let pokemonsList = [];

async function getPokemons() {
  const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon");
  const results = await pokeApi.json;
  console.log(results);
  return results;
}
