"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/types/pokemon";

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const response = await fetch("api/pokemons");
      const data = await response.json();
      setPokemons(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div className="container mx-auto">
      {pokemons.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-screen hide-background ">
          <p className="text-xl">도감 불러오는 중!</p>
          <Image
            src="/image/ev.gif"
            alt="running ev"
            width={200}
            height={100}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="pokemon p-4 border rounded-lg flex flex-col items-center bg-green-500 bg-opacity-80"
            >
              <Link href={`/pokemons/${pokemon.id}`}>
                <div className="relative">
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.korean_name}
                    width={96}
                    height={96}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-2 text-center">{pokemon.korean_name}</p>
                <p className="text-center">도감번호 : {pokemon.id}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonList;
