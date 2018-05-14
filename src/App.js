import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="portfolio app main">
      <h1>Megan Leonardo's Portfolio</h1>
      <h2>
        <a className="nav" href="https://github.com/leonardom249">Github</a>
        <a className="nav" href="https://www.linkedin.com/in/meganleonardo/">Linkedin</a>
        <a className="nav" href="https://github.com/leonardom249/portfolio-server">Portfolio Server</a>
        <a className="nav" href="https://github.com/leonardom249/portfolio-client.git">and Client</a>
      </h2>

      <section>
        <div className="work-examples">
          <div className="example-1">
            <h3>Ingredient Inheritance</h3>
            <ul>
                <li> <a href="https://github.com/leonardom249/ingredient-inheritance-server">Server Code</a></li>
                <li> <a href="https://github.com/leonardom249/ingredient-inheritance-client">Client Code</a></li>
            </ul>
            <h4>Click Picture for Deployed Version:</h4>
            <a href='https://vigilant-leakey-ceaa26.netlify.com/'>
             <img alt="ingredient-inheritance-deployed" src='https://lh3.googleusercontent.com/n-dayesQno7wI38X0_qEyUYp0BYgAzvKKAeCcqb9ryiAQ9RKw577u-WAwFMrVU5IZ4s3I5skL9IaJItvYXvshGzZ2_r813yQYXByvNgYph8mrF735VN75yvqTk6Mia7-p6oU5fvB=w2400' />
            </a> 
          </div>
        </div>
        <div className="work-examples"></div>
        <div className="work-examples"></div>
        <div className="work-examples"></div>
        <div className="work-examples"></div>
        <div className="work-examples"></div>
      </section>
      </div>
    );
  }
}

export default App;
