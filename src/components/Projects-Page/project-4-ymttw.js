import React from 'react';
import '../../component-css/Projects-Page/projects.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class YMTTW extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'ymttw'}>
                <section className="project-section background-ymttw landing-section">
                    <div className="title-container col-12">
                        <h2 className="app-title">You Matter To This World</h2>
                        <p className="sub-title">About App: </p>
                        <p className="app-info">You Matter To This World is <em>currently in development</em>.  It will be a website to promote positivity and raise suicide awareness.  It is a freelance site I am working on with a new local charity group.  Currently being built with the MERN stack.</p>
                        <p className="sub-title demo-account">Coming Winter 2018</p>
                        <p className="about-info"><strong> Temporary Deployed Site <br/> Currently gives basic information about future site.</strong></p> 
                        <div className="buttons-container">
                            <a href="https://ymttw.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="action-2-button">Deployed Site <i className="fas fa-globe"></i></a>
                            <a href="https://github.com/leonardom249/you-matter" target="_blank" rel="noopener noreferrer" className="action-2-button">Github Client <i className="fab fa-github"></i></a>
                            {/* <a href="https://github.com/leonardom249/ymttw-server" target="_blank" rel="noopener noreferrer" className="action-2-button">Github Server <i className="fab fa-github"></i></a> */}
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