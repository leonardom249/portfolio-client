import React, { Component } from 'react';
import './App.css';
import { WorkExamples } from './components/work-examples';
import { NavBar } from './components/nav-bar';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
      <h1>Megan Leonardo's Portfolio</h1>
      <NavBar/>
      <WorkExamples/>
      </div>
    );
  }
}

export default App;
