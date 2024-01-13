import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Item, RankedList} from "./components/item";

let basicItem: Item = {name: "Sydney", rank: 1}
let basicItem2: Item = {name: "Ames", rank: 2}
let lst = [basicItem, basicItem2]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <RankedList items={lst} />
      </header>
    </div>
  );
}

export default App;
