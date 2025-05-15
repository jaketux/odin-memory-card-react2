import "/src/App.css";
import { useEffect, useState } from "react";

export default function Main(props) {
  const newArray = props.cardsArray;

  const getRandomArray = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const selected = getRandomArray(newArray, 12);

  return (
    <div className="main-game">
      <div className="main-game-text">{props.displayMessage}</div>
      <div className="cards">
        {selected.map(
          (item, index) =>
            index < 12 && (
              <div
                className="card"
                onClick={props.handleClick}
                style={
                  !props.cardsActive
                    ? { pointerEvents: "none", opacity: "0.4" }
                    : {}
                }
              >
                <img
                  src={item.imageUrl}
                  alt="pokemon-image"
                  className="card-image"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
