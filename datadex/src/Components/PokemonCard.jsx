import React from "react";
import { useNavigate } from "react-router-dom";

const tipoCor = {
  grass: "bg-green-300",
  fire: "bg-red-300",
  water: "bg-blue-300",
  bug: "bg-lime-300",
  normal: "bg-gray-200",
  poison: "bg-purple-300",
  electric: "bg-yellow-300",
  ground: "bg-yellow-600",
  fairy: "bg-pink-300",
  fighting: "bg-red-600",
  psychic: "bg-pink-400",
  rock: "bg-yellow-700",
  ghost: "bg-indigo-400",
  ice: "bg-blue-200",
  dragon: "bg-purple-600",
  dark: "bg-gray-700",
  steel: "bg-gray-400",
  flying: "bg-sky-300",
};

export default function PokemonCard({ pokemon }) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-200 shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-all duration-200"
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-20 h-20 mb-2"
      />
      <h2 className="text-lg font-bold capitalize mb-1">{pokemon.name}</h2>
      <div className="flex gap-2 flex-wrap justify-center mb-2">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className={`badge text-sm font-semibold ${tipoCor[type] || "bg-gray-300"}`}
          >
            {type}
          </span>
        ))}
      </div>
      <button
        onClick={() => navigate(`/pokemon/${pokemon.name}`)}
        className="btn btn-primary btn-sm mt-auto"
      >
        Ver Detalhes
      </button>
    </div>
  );
}