import { useState } from "react";
import "./App.css";
import { List } from "./List";
import { Person } from "./Person";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export const App = () => {
  const animals = ["Lion", "Cow", "Snake", "Letard", "Lizard", "Monkey", "Elephant", "Tiger"];

  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [numChanges, setNumChanges] = useState(0);

  const onButtonClick = (color) => () => {
    if (color !== backgroundColor) {
      setBackgroundColor(color);
      setNumChanges((prevCount) => prevCount + 1);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>Animals starting with L:</h1>
      <List animals={animals} />

      <div className="color-buttons">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
      <p>Number of changes: {numChanges}</p>

      <Person />
    </div>
  );
};
