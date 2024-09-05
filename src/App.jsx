import "./App.css";
import { List } from "./List";

export const App = () => {
  const animals = [
    "Lion",
    "Cow",
    "Snake",
    "Lizard",
    "Elephant",
    "Tiger",
    "Zebra",
    "Monkey",
    "Elephant",
    "Tiger",
    "Zebra",
    "Cheetah",
    "Wolf",
    "Fox",
    "Rabbit",
    "Deer",
    "Bear",
  ];

  return (
    <>
      <h1>Animals: </h1>
      <List animals={animals} />
    </>
  );
};
