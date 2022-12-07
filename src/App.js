import React, { Component } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-list/SearchBox";
import './App.css'
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //Fetching monsters name. We are going to fetch the names after react page render
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    // console.log(filte  redMonsters)
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox onChange={this.onSearchChange}/>
 
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
