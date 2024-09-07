import { useState } from "react";

export const Person = () => {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: 100,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleFirstNameChange = (e) => {
    setPerson((prevPerson) => ({ ...prevPerson, firstName: e.target.value }));
  };

  const handleLastNameChange = (e) => {
    setPerson((prevPerson) => ({ ...prevPerson, lastName: e.target.value }));
  };

  console.log("during render: ", person);

  return (
    <div className="person">
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <div>
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
          placeholder="First Name"
        />
        <input
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
          placeholder="Last Name"
        />
      </div>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </div>
  );
};
