import axios from 'axios';

const getPokemon = async () => {
  try {
    const { data } = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    );
    //console.log(data.results);
    return data.results;
  } catch (error) {
    console.log('There was an error', error);
  }
};

export { getPokemon };
