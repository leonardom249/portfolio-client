import React from 'react';
import '../../component-css/Projects-Page/ing-inh.css'
import ScrollableAnchor from 'react-scrollable-anchor'


export default class IngredientInheritance extends React.Component {
    render() {
        return (
            <ScrollableAnchor id={'ing-inh'}>
                <section className="project-section background-ing-inh">
                    <h2 className="title">Project 1: Ingredient Inheritance</h2>
                    <div className="text-container row">
                        <div className="project-left col-6">
                            <a href="https://github.com/leonardom249/ingredient-inheritance-client" className="projects-button">Github Client</a>
                        </div>
                        <div className="project-right col-6">
                        <a href="https://github.com/leonardom249/ingredient-inheritance-server" className="projects-button">Github Server</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="buttons-container">
                            <a href='#top' className="scroll-top-button">Scroll Top</a>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        );
    }
}