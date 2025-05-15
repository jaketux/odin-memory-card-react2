import Header from "./Components/Header";
import Scoreboard from "./Components/Scoreboard";
import Main from "./Components/Main";
import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [displayMessage, setDisplayMessage] = useState(
    "Don't click the same Pokémon twice!"
  );

  const [cardsArray, setCardsArray] = useState([]);

  const [cardsClicked, setCardsClicked] = useState([]);

  const [cardsActive, setCardsActive] = useState(true);

  useEffect(() => {
    function fetchPokemonData(pokemon) {
      let url = pokemon.url;
      fetch(url)
        .then((res) => res.json())
        .then((pokeData) => {
          setCardsArray((prevCardsArray) => [
            ...prevCardsArray,
            {
              imageUrl: pokeData.sprites.front_default,
            },
          ]);
        });
    }

    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((allpokemon) =>
        allpokemon.results.forEach((pokemon) => {
          fetchPokemonData(pokemon);
        })
      );
  }, []);

  function handleClick(event) {
    if (cardsClicked.includes(event.target.src)) {
      setDisplayMessage("Game over! You already clicked this Pokémon.");
      setCardsActive(false);
    }
    //check if card has been clicked before
    //if no, increase score, and re-shuffle cards
    else {
      setCardsClicked((prevCardsClicked) => [
        ...prevCardsClicked,
        event.target.src,
      ]);
      setCurrentScore((prevScore) => prevScore + 1);
    }
    //if yes, game over
  }

  function restartGame() {
    setCurrentScore(0);
    setCardsActive(true);
    setCardsClicked([]);
    setDisplayMessage("Don't click the same Pokémon twice!");
  }

  useEffect(() => {
    if (bestScore < currentScore) {
      setBestScore(currentScore);
    }
    if (bestScore === 20) {
      setCardsActive(false);
      setDisplayMessage("You win! Click restart to play again");
    }
  }, [currentScore]);

  return (
    <>
      <Header />
      <Scoreboard
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        restartGame={restartGame}
      />
      <Main
        cardsArray={cardsArray}
        displayMessage={displayMessage}
        setDisplayMessage={setDisplayMessage}
        cardsActive={cardsActive}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
