import React from "react";
import { useArray, useMount } from "utils";

interface Person {
  name: string;
  age: number;
}
export const TsReactTest = () => {
  const persons: Person[] = [
    {
      name: "jack",
      age: 25,
    },
    {
      name: "ma",
      age: 22,
    },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  return (
    <>
      <button onClick={() => add({ name: "John", age: 22 })}>add john</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person: Person, index: number) => {
        return (
          <div key={index}>
            <span>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </>
  );
};
