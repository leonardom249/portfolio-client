import React, { Component } from 'react';
import './index.css';
import LandingPage from './components/Projects-Page/landing-page';
import IngredientInheritance from './components/Projects-Page/project-1-inginh';
import HandsToHear from './components/Projects-Page/project-2-hth';
import NavBar from './components/nav-bar';
import Contact from './components/Projects-Page/contact';
import ConcertConnect from './components/Projects-Page/project-3-concertconnect';
import YMTTW from './components/Projects-Page/project-4-ymttw';


class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
        <NavBar />
        <LandingPage/>
        <ConcertConnect />
        <YMTTW/>
        <IngredientInheritance />
        <HandsToHear />
        <Contact />
      </div>
    );
  }
}

export default App;
