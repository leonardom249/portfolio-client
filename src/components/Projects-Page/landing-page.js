import React from 'react';
import { connect } from 'react-redux';


import '../../component-css/Projects-Page/landing-page.css'

export class LandingPage extends React.Component {
    render() {
        let buttons=(
                <div className="buttons-container">
                    <a href="#ing-inh" className="projects-button">Ingredient Inheritance <i className="fas fa-book-open"></i></a>
                    <a href="#hands-to-hear" className="projects-button">Hands To Hear <i className="fas fa-hands"></i></a>
                    <a href="#concertconnect" className="projects-button">ConcertConnect <i className="fas fa-music"></i></a>
                </div>
            )

        let dialog='Hello there!  My name is Megan and I am a full stack developer with a passion for using React, Redux, Node.js, Express, and MongoDB.  I love the intuitiveness of React/Redux, the inclusivity of being able to use JavaScript across client and server via Node.js, and the flexability of MongoDB.  In other words, I love my MERN stack.  I also love creativity and learning.  I have been a musician for several years, playing downtown Austin, TX so creativity is a big part of my everyday.  As for future aspirations, I am looking forward to becoming a full stack, front end, or junior web developer and learning something new each and every day.  I believe with an open mind and a hunger to learn, anything is possible.'
        return (
            <div className="background-landing">
                    <section className="landing-section" id='top'>
                        <div className="row">
                            <div className="title-container col-12">
                                <h1 className="title">Megan Leonardo's Portfolio</h1>
                                <div className="row">
                                    <h2 className="sub-title">About Me:</h2>
                                    <p className="about-info">{dialog}</p>
                                    <h2 className="sub-title">Projects:</h2>
                                    {buttons}
                                </div>
                            </div>
                        </div>
                        
                    </section>

            </div>
        );
    }
}

export default connect()(LandingPage)