import React from "react";
import { fetchPokemonData } from "@/apis/pokoemon";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonDetailPage = async ({ params }: { params: { id: string } }) => {
  const pokemon: Pokemon = await fetchPokemonData(params.id);

  const renderTypes = () => {
    return pokemon.types.map((type) => (
      <span key={type.type.name} className="type-badge">
        {type.type.korean_name || type.type.name}
      </span>
    ));
  };

  const renderAbilities = () => {
    return pokemon.abilities.map((ability) => (
      <span key={ability.ability.name} className="ability-badge">
        {ability.ability.korean_name || ability.ability.name}
      </span>
    ));
  };

  return (
    <div className="pokemon-details max-w-xl mx-auto bg-green-500 bg-opacity-80 shadow-lg rounded-lg overflow-hidden mt-5 mb-5 ">
      <div className=" bg-green-800 bg-opacity-80 text-white text-center p-4">
        <h2 className="text-2xl font-bold">{pokemon.korean_name}</h2>
        <p>No. {pokemon.id.toString().padStart(4, "0")}</p>
      </div>
      <div className="p-4 text-black flex flex-col justify-start items-center">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.korean_name}
          width={96}
          height={96}
          className="mx-auto"
        />
        <div className="text-center text-xl my-2">
          이름: {pokemon.korean_name}
        </div>
        <div className="flex gap-2">
          <p className="text-center">키: {pokemon.height / 10} m</p>
          <p className="text-center">무게: {pokemon.weight / 10} kg</p>
        </div>
        <div className="flex gap-2">
          <div className="text-center flex gap-1">
            <p className="font-bold p-2 mb-1 mt-1">타입:</p>
            <div className="bg-red-500 text-white mb-2 mt-3 h-6 pr-1 pl-1 rounded">
              {renderTypes()}
            </div>
          </div>
          <div className="text-center flex gap-1">
            <p className="font-bold p-2 mb-1 mt-1">특성:</p>
            <div className="bg-blue-500 text-white mb-2 mt-3 h-6 pr-1 pl-1 rounded">
              {renderAbilities()}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-2">
        <p className="font-bold mb-5">기술:</p>
        <div className="flex flex-wrap gap-2 items-center text-center justify-center">
          {pokemon.moves.map((move) => (
            <div key={move.move.name}>{move.move.korean_name}</div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4 mb-4">
        <Link href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
          뒤로 가기
        </Link>
      </div>
    </div>
  );
};

export default PokemonDetailPage;
