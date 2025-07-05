import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PokemonList() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  const buscarPokemon = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log("erro:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    buscarPokemon();
  }, [id]);

  if (!pokemon) {
    return (
      <div className="flex justify-center items-center h-scren">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <div className="card bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_default || pokemon.sprites.front_default
            }
            className="w-32 h-32"
          />
          <img
            src={
              pokemon.sprites.versions["generation-v"]["black-white"].animated
                .front_shiny || pokemon.sprites.front_shiny
            }
            className="w-32 h-32"
          />
        </figure>

        <div className="flex gap-2 mb-2">
          {pokemon.types.map((tipo) => (
            <div className={`badge badge-outline capitalize`}>
              {tipo.type.name}
            </div>
          ))}
        </div>

        <p>Peso: {pokemon.weight / 10} kg</p>
        <p>Altura: {pokemon.height / 10} m</p>

        <div className="mt-4">
          <p className="font-bold">Habilidades:</p>
          <ul>
            {
              pokemon.abilities.map((a) => {
                <li key={a.ability.name} className="capitalize">
                  - {a.ability.name}
                </li>
              })
            }
            </ul>
        </div>

            <div className="mt-6">
              <button onClick={() => navigate(-1)} className="btn btn-outline">
                Voltar
              </button>
            </div>


      </div>
    </div>
  );
}
