import { Component } from "react";
import "./CardList.css";
class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <div className="card-container" key={monster.id}>
            <img
              alt="monster"
              src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
            />
            <h2> {monster.name} </h2>
            <p> {monster.email} </p>
          </div>
        ))}
      </div>
    );
  }
}
export default CardList;
