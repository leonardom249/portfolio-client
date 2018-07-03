import React from 'react';
import '../../component-css/Projects-Page/ing-inh.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class IngredientInheritance extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'ing-inh'}>
                <section className="project-section background-ing-inh">
                    <div className="title-container col-12">
                        <h2 className="app-title">Ingredient Inheritance</h2>
                        <p className="sub-title">About App: </p>
                        <p className="app-info">Ingredient Inheritance was created as a way to test my new abilities using a MERN stack and to do something I have always meant to do, safely store my secret family recipes.  I always forget the insanely delicious recipes my mom teaches me, but I also do not want to write them down for fear of ruining the "family secret".  So I created this app to do just that.  By making it password protected, only the user has the ability to create, read, edit, and delete to their own recipes.</p>
                        <p className="sub-title demo-account">Deployed Demo Account:</p>
                        <p className="about-info"><strong> Username:<em> demo</em> <br/> Password:<em> demo123456</em></strong></p>
                        <div className="buttons-container">
                            <a href="https://vigilant-leakey-ceaa26.netlify.com/" target="_blank" className="ing-inh-button">Deployed App</a>
                            <a href="https://github.com/leonardom249/ingredient-inheritance-client" target="_blank" className="ing-inh-button">Github Client</a>
                            <a href="https://github.com/leonardom249/ingredient-inheritance-server" target="_blank" className="ing-inh-button">Github Server</a>
                        </div>
                        <div className="row">
                            <div className="buttons-container">
                                <a href='#top' className="move-button">Back to The Top</a>
                                <a href='#hands-to-hear' className="move-button">Next</a>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}