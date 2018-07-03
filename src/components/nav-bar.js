import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

// import HamburgerMenu from './hamburger-menu';
import '../component-css/nav.css';

export class NavBar extends React.Component {
    render() {

        return (
            <React.Fragment>
                <header className="navbar">
                    <nav className="navigation">
                        <div className="icon"><a className="icon" href="#top">M.L. Portfolio</a></div>
                        <div className="add-room"></div>
                        <div className="toggle-button">
                            {/* <HamburgerMenu /> */}
                        </div> 
                        <div className="add-room-half"></div>
                        <div className="navigation-items">
                            <ul>
                                <li>               
                                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1LQXfYq6V0Majp8OrzevKYLiB6VUXM5e4O5H9-YvEStQ/edit?usp=sharing">Resume</a>
                                </li>
                                <li> 
                                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://github.com/leonardom249">Github</a>
                                </li> 
                                <li> 
                                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
                                </li> 
                                <li> 
                                    <a className="nav" href="#contact">Contact</a>
                                </li> 
                            </ul>
                        </div>
                        
                    </nav>
                </header>
            </React.Fragment>

        );
    }
}


export default connect()(NavBar);
