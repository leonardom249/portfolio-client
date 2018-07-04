import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../component-css/nav.css';
import MobileNavDrawer from './mobile-nav-bar'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: window.innerWidth,
            mobileNavVisible: false,
            mobileNav: null
          };
        }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
     }
          
    componentWillUnmount() {
            window.removeEventListener('resize', this.handleResize.bind(this));
          }
          
    //setting state based on how large the viewing window is:
    handleResize() {
            this.setState({windowWidth: window.innerWidth});
        }    

    navigationLinks() {
        return (
                <ul>
                <li key={1}>               
                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1LQXfYq6V0Majp8OrzevKYLiB6VUXM5e4O5H9-YvEStQ/edit?usp=sharing">Resume</a>
                </li>
                <li key={2}> 
                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://github.com/leonardom249">Github</a>
                </li> 
                <li key={3}> 
                    <a className="nav" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
                </li> 
                <li key={4}> 
                    <a className="nav" href="#contact">Contact</a>
                </li> 
            </ul>
        );
    }

    renderMobileNav() {
        if(this.state.mobileNavVisible) {
            console.log("working")
        }
    }
          
    handleNavClick() {
        if(!this.state.mobileNavVisible) {
              this.setState({mobileNavVisible: true, mobileNav:<MobileNavDrawer/>});
        } else {
              this.setState({mobileNavVisible: false, mobileNav:null});
            }
        }

    render() {
        let navButtons=(
            <div className="navigation-items">
                {this.navigationLinks()}
            </div>)

        if(this.state.windowWidth <= 850){
            navButtons=(  
                <div className="mobile_nav">
                  <p onClick={this.handleNavClick.bind(this)}><i className="fas fa-bars"></i></p>
                </div>)              
        }
        if(this.state.windowWidth > 850){
            this.state.mobileNav=null
        }

        return (
            <React.Fragment>
                <header className="navbar">
                    <nav className="navigation">
                        <div className="icon"><a className="icon" href="#top">M.L. Portfolio</a></div>
                        <div className="add-room"></div>
                        <div className="toggle-button">
                        </div> 
                        <div className="add-room-half"></div>
                        {navButtons}
                    </nav>
                </header>
                {this.state.mobileNav}
            </React.Fragment>

        );
    }
}


