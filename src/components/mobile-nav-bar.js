import React from "react"
import '../component-css/mobile-nav.css';

export default function MobileNavDrawer (){
    return(
        <React.Fragment>\
                <header className="navbar-mobile">
                    <nav className="navigation-mobile">
                        <div className="add-room-mobile"></div>
                        <div className="nav-items-mobile">
                            <ul>
                                <li key={1}>               
                                    <a className="mobile-nav" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1LQXfYq6V0Majp8OrzevKYLiB6VUXM5e4O5H9-YvEStQ/edit?usp=sharing">Resume</a>
                                </li>
                                <li key={2}> 
                                    <a className="mobile-nav" target="_blank" rel="noopener noreferrer" href="https://github.com/leonardom249">Github</a>
                                </li> 
                                <li key={3}> 
                                    <a className="mobile-nav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
                                </li> 
                                <li key={4}> 
                                    <a className="mobile-nav" href="#contact">Contact</a>
                                </li> 
                            </ul>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        
    )
}