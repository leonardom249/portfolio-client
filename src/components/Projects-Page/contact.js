import React from 'react';
import '../../component-css/Projects-Page/projects.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class Contact extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'contact'}>
                <section className="project-section background-contact landing-section">
                    <div className="title-container col-12">
                        <h2 className="app-title">Contact Me</h2>
                        <p className="sub-title">Email:
                            <br/>
                            <a className="email" href="mailto:leonardo.megan@gmail.com?subject=Portfolio Inquiry">leonardo.megan@gmail.com</a>
                        </p>

                        <div className="buttons-container">
                            <a className="action-2-button" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1LQXfYq6V0Majp8OrzevKYLiB6VUXM5e4O5H9-YvEStQ/edit?usp=sharing">Resume <i className="fas fa-file"></i></a>
                        
                            <a href="https://vigilant-leakey-ceaa26.netlify.com/" target="_blank" rel="noopener noreferrer" className="action-2-button">Github <i className="fab fa-github"></i></a>
                            
                            <a href="https://vigilant-leakey-ceaa26.netlify.com/" target="_blank" rel="noopener noreferrer" className="action-2-button">LinkedIn <i className="fab fa-linkedin"></i></a>

                        </div>   
                        <div className="row">
                            <div className="buttons-container">
                                <a href='#top' className="move-button move-2">Back to The Top</a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}