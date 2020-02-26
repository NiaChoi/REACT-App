import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content";
import Subject from "./components/Subject";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title = "WEB" sub = "World wide web!"></Subject>
        <TOC></TOC>
        <Content title = "HTML" desc = "HTML is HyperText Markup Lanquage." ></Content>
      </div>
    );
  }
}
  

export default App;