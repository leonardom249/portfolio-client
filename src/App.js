import React, { Component } from 'react';
import './App.css';
import { WorkExamples } from './components/work-examples';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
      <h1>Megan Leonardo's Portfolio</h1>
      <h2>
        <a className="nav" href="https://github.com/leonardom249">Github</a>
        <a className="nav" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
        <a className="nav" href="https://github.com/leonardom249/portfolio-server">Portfolio Server Code</a>
        <a className="nav" href="https://github.com/leonardom249/portfolio-client.git">and Client Code</a>
      </h2>
        <WorkExamples/>
      </div>
    );
  }
}

export default App;
