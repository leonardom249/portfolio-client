import React from 'react'
import '../component-css/work-examples.css';

export function WorkExamples (){
    return(
        <div className="examples"> 
            <div className="work-example">
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
            <div className="work-example"></div>
            <div className="work-example"></div>
            <div className="work-example"></div>
            <div className="work-example"></div>
            <div className="work-example"></div>
        </div>
    )
}