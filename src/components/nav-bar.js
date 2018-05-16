import React from 'react'
import '../component-css/nav.css';

export function NavBar (){
    return(
       <nav>
            <h2>
                <a className="nav" href="https://docs.google.com/document/d/1LQXfYq6V0Majp8OrzevKYLiB6VUXM5e4O5H9-YvEStQ/edit?usp=sharing">Resume</a>
                <a className="nav" href="https://github.com/leonardom249">Github</a>
                <a className="nav" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
            </h2>
       </nav>
    )
}