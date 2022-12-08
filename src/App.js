import React, { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-list/SearchBox";
import "./App.css";

export const App = () => {
  const [searchField, setSearchFeild] = useState("");
  const [monsters , setMonster] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => setMonster(res));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  console.log('fired')
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchFieldString);
  };
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <input
        className="search-box"
        placeholder="search Monster"
        onChange={onSearchChange}
      />
      <SearchBox onChange={onSearchChange}/>

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
