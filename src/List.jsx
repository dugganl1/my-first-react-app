import { ListItem } from "./ListItem";

export const List = (props) => {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? (
          <ListItem
            key={animal}
            animal={animal}
          />
        ) : null;
      })}
    </ul>
  );
};
