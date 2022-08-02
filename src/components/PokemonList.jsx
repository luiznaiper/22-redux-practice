import React from 'react';
import { PokemonCard } from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const getPokemonAbilities = (abilities) => {
    const abilitiesArray = abilities
      .map((ability) => ability.ability.name)
      .join(' - ');
    return abilitiesArray;
  };
  const getPokemonTypes = (types) => {
    const typesArray = types.map((type) => type.type.name).join(' - ');
    return typesArray;
  };
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => {
        return (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={getPokemonAbilities(pokemon.abilities)}
            types={getPokemonTypes(pokemon.types)}
            id={pokemon.id}
            favorite={pokemon.favorite}
          />
        );
      })}
    </div>
  );
};

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { PokemonList };
