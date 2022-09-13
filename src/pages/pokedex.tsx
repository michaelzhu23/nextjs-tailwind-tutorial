import React, { useState } from "react";
import Image from "next/image";
import PokedexLogo from "./images/pokedex.svg";
import PokedexLogoNew from "./images/pokedex2022.png";

const pokedex = () => {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState(null);

  const fetchPokemonData = async (id: string) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setApiData(data);
    } catch (err) {
      alert(err);
      console.error(err);
    }
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPokemonData(input);
    setInput("");
  };

  return (
    <div className="flex flex-col items-center mt-10 px-5">
      <Image src={PokedexLogo} width={400} height={200}/>
      <form onSubmit={handleSubmit}>
        <input
          className="border-2 border-black border-solid rounded mt-2"
          type="text"
          value={input}
          onChange={handleOnChange}
        />
      </form>
      <h2 className="mt-5 text-blue-600 text-xl">
        {apiData?.name.toUpperCase()}
      </h2>
      <img
        className="my-8"
        src={apiData?.sprites.other.dream_world.front_default}
      />
      <ol className="list-decimal">
        {apiData?.moves.slice(0, 5).map((move, index) => (
          <li style={{ fontWeight: "bold" }} key={index}>
            {move.move.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default pokedex;
