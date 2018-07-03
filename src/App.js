import React, { Component } from 'react';
import './index.css';
import LandingPage from './components/Projects-Page/landing-page';
import IngredientInheritance from './components/Projects-Page/project-1-inginh';
import HandsToHear from './components/Projects-Page/project-2-hth';
import NavBar from './components/nav-bar';




// import { Recommendations } from './components/recommendations';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
        <NavBar />
        <LandingPage/>
        <IngredientInheritance />
        <HandsToHear />
      </div>
    );
  }
}

export default App;
