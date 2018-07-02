import React from 'react';
import '../../component-css/Projects-Page/ing-inh.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class IngredientInheritance extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'ing-inh'}>
                <section className="project-section background-ing-inh">
                    <h2 className="title">Ingredient Inheritance</h2>
                    <div className="buttons-container">
                        <div className="project-left col-6">
                            <a href="https://github.com/leonardom249/ingredient-inheritance-client" className="ing-inh-button">Github Client</a>
                        </div>
                        <div className="project-right col-6">
                        <a href="https://github.com/leonardom249/ingredient-inheritance-server" className="ing-inh-button">Github Server</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons-container">
                            <a href='#top' className="move-button">Back to The Top</a>
                            <a href='#hands-to-hear' className="move-button">Next</a>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}