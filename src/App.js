import React, { Component } from "react";
import "./App.css";
import { MonsterList } from "./components/Monster-List/Monster-List";
import { FilterMonster } from "./components/FilterMonster/FilterMonster";

class App extends Component {
  state = {
    monsters: [],
    filterText: "",
  };

  onChangeFilterText = (event) => {
    this.setState({ filterText: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        this.setState({ monsters: monsters });
      });
  }

  render() {
    const { monsters, filterText } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Fight</h1>
        <FilterMonster changeFilterText={this.onChangeFilterText} />
        <MonsterList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
