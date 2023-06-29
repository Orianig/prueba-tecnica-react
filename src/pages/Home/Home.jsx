import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  //establezco los hoks
  //guarda la data
  const [result, setResult] = useState([]);
  //guarda la lista de pokemones
  const [poke, setPoke] = useState([]);

  const [load, setLoad] = useState("true");

  const pokemon = [];

  useEffect(() => {
    //utilizo un fetch para la llamada
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=12") // lamada a la API, el resultado es una promesa
      .then((response) => response.json()) //transformamos la respuesta a JSON (response.json() también como promesa
      .then((data) => //respuesta en formato objeto
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => pokemon.push(allpokemon));
            setPoke(pokemon);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
    console.log(poke);
  }, 1000);

  return (
    <div className="Home">
      <div className="pokegallery">
        {load ? (
          <p>Loading...</p>
        ) : (
          poke.map((img, i) => (
            <div id={img.id} key={img.id}>
              <div className="card">
                <img src={img.sprites.front_default} alt="pokemon" />
                <div>
                  <h2>{img.name}</h2>
                  <h4>type: {img.types[0].type.name}</h4>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
