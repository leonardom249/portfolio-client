import React, { Component } from 'react';
import './App.css';
import { WorkExamples } from './components/work-examples';
import { NavBar } from './components/nav-bar';
import { Header } from './components/header';
import { AboutMe } from './components/about-me';
import { ContactInfo } from './components/contact-info';
// import { Recommendations } from './components/recommendations';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
        <Header/>
        <NavBar/>
        <AboutMe/>
        <ContactInfo/>
        {/* <Recommendations/> */}
        <WorkExamples/>
      </div>
    );
  }
}

export default App;
