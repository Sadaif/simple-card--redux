import React, { Component } from "react";
import user from "./images/syed.jpg";
import "./App.css";
import CardData from "./component/CardData";
import reducer from './reducers';
import {createStore} from 'redux';

const initialState = {
  name: "Syed Murtza",
  description: "Code Artist 💻 ",
  likes: "Ruby on Rails 💎",
  location: "PK 🇵🇰 "
}

const store = createStore(reducer, initialState)

class App extends Component {
  state = store.getState();
  render() {
    const { name, description, likes, location } = this.state;
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>
        
       <CardData name={name} description={description} likes={likes} location={location} />
      </div>
    );
  }
}

export default App;
