import React from 'react';
import '../../component-css/Projects-Page/projects.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class ConcertConnect extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'concertconnect'}>
                <section className="project-section background-concertconnect landing-section">
                    <div className="title-container col-12">
                        <h2 className="app-title">ConcertConnect</h2>
                        <p className="sub-title">About App: </p>
                        <p className="app-info">ConcertConnect was created to find everything a user needs for a concert in one spot.  CC allows users to search for a concert near them based on genre and location as well as find tickets, find housing, and email saved contacts via a pre-populated message with pertinent concert details and links.  Users can also favorite concerts after logging in for easy access and add contacts that will auto populate in the BCC field for sending off emails.  This project was done to test teamwork skills and was created with 3 other full stack developers: Trent Duncan, Tom Haborak, and Kevin Murphy.  This is another example of the MERN stack and is probaby my favorite project yet.  As with all works of art, and I believe apps to be just that, this app is a constant work in progress and I can not wait to add more functionality to it in my free time.</p>
                        <p className="sub-title demo-account">Deployed Demo Account:</p>
                        <p className="about-info"><strong> Username:<em> demo</em> <br/> Password:<em> demo123456</em></strong></p>
                        <div className="buttons-container">
                            <a href="https://concertconnect-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="action-1-button">Deployed App   <i className="fas fa-music"></i></a>
                            <a href="https://github.com/kttm-development/kttm-client" target="_blank" rel="noopener noreferrer" className="action-1-button">Github Client</a>
                            <a href="https://github.com/kttm-development/kttm-server" target="_blank" rel="noopener noreferrer" className="action-1-button">Github Server</a>
                        </div>
                        <div className="row">
                            <div className="buttons-container">
                                <a href='#top' className="move-button move-1">Back to The Top</a>
                                <a href='#contact' className="move-button move-1">Contact</a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>

        );
    }
}