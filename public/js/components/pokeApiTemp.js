async function getPokemons() {
  const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon");
  const results = await pokeApi.json();

  const pokeArray = results.results;

  return pokeArray;
}
(async () => {})();

getPokemons();
