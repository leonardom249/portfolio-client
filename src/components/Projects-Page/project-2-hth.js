import React from 'react';
import '../../component-css/Projects-Page/projects.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class HandsToHear extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'hands-to-hear'}>
                <section className="project-section background-hands-to-hear landing-section">
                    <div className="title-container col-12">
                        <h2 className="app-title">Hands To Hear</h2>
                        <p className="sub-title">About App: </p>
                        <p className="app-info">Hands to Hear was created as a way to work on my knowledge of data structures and algorithms while also providing an easy way for someone to learn a new, and very important, language.  HTH uses the MERN stack and spaced repetition to teach the most basic, but integral part of American Sign Language: the alphabet.  The app displays pictures of signed letters with a textbox for the users answer.  If the user is correct, they will move on faster and the correct letter will appear less frequently.  If the user is incorrect, the letter will appear more frequently until correct.  This app was created with another full stack developer, Alexa Scott.</p>
                        <p className="sub-title demo-account">Deployed Demo Account:</p>
                        <p className="about-info"><strong> Username:<em> Demo</em> <br/> Password:<em> demo1234</em></strong></p> 
                        <div className="buttons-container">
                            <a href="https://hands-to-hear.netlify.com/" target="_blank" rel="noopener noreferrer" className="action-2-button">Deployed App <i className="fas fa-hands"></i></a>
                            <a href="https://github.com/leonardom249/hands-to-hear-client" target="_blank" rel="noopener noreferrer" className="action-2-button">Github Client <i className="fab fa-github"></i></a>
                            <a href="https://github.com/leonardom249/hands-to-hear-server" target="_blank" rel="noopener noreferrer" className="action-2-button">Github Server <i className="fab fa-github"></i></a>
                        </div>
                        <div className="row">
                                <div className="buttons-container">
                                    <a href='#top' className="move-button move-2">Back to The Top</a>
                                    <a href='#ing-inh' className="move-button move-2">Next</a>
                                </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}