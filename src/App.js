import React, { Component } from 'react';
import './index.css';
import { NavBar } from './components/nav-bar';
import LandingPage from './components/Projects-Page/landing-page';
import IngredientInheritance from './components/Projects-Page/project-1-inginh';


// import { Recommendations } from './components/recommendations';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
        <LandingPage/>
        <IngredientInheritance />
      </div>
    );
  }
}

export default App;
