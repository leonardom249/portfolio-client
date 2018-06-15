import React from 'react'
import '../component-css/work-examples.css';

export function WorkExamples (){
    return(
        <div className="examples"> 
            <div className="work-example">
                <div className="example-1">
                    <h3>Ingredient Inheritance</h3>
                    <p><em>Family recipe app for those looking to securely store family recipes</em></p>
                    <ul>
                        <li><strong>Demo Account:</strong></li>
                        <li>Username: demo</li>
                        <li>Password: demo1234</li>
                        <li> <a href="https://github.com/leonardom249/ingredient-inheritance-server">Server Code</a></li>
                        <li> <a href="https://github.com/leonardom249/ingredient-inheritance-client">Client Code</a></li>
                    </ul>
                    <h4>Click Picture for Deployed Version:</h4>
                    <a href='https://vigilant-leakey-ceaa26.netlify.com/'>
                        <img alt="deployed-app" src='https://lh3.googleusercontent.com/n-dayesQno7wI38X0_qEyUYp0BYgAzvKKAeCcqb9ryiAQ9RKw577u-WAwFMrVU5IZ4s3I5skL9IaJItvYXvshGzZ2_r813yQYXByvNgYph8mrF735VN75yvqTk6Mia7-p6oU5fvB=w2400' />
                    </a> 
                </div>
                </div>
            <div className="work-example"><h3>Ingredient Inheritance</h3>
                <div className="example-2">
                    <h3>Hands To Hear</h3>
                    <p><em>Co-created, spaced repetition app to learn basic ASL alphabet.</em></p>
                    <ul>
                        <li><strong>Demo Account:</strong></li>
                        <li>Username: Demo</li>
                        <li>Password: demo1234</li>
                        <li> <a href="https://github.com/leonardom249/hands-to-hear-server">Server Code</a></li>
                        <li> <a href="https://github.com/leonardom249/hands-to-hear-client">Client Code</a></li>
                    </ul>
                    <h4>Click Picture for Deployed Version:</h4>
                    <a href='https://compassionate-fermi-44db9e.netlify.com/'>
                        <img alt="deployed-app" src='https://lh3.googleusercontent.com/cwByjvcHXeYw3_kiIBKsIWaW3KFj_Tvoj4Rxgm547yHeDJRCwSvGWWTTGGwLU7oHftyDQbGXHK12KRH6J7ORAaVyl5A1eaQ1itSTSfPmDu-YBCIVrGB3qcHActSZPhPIo8CX558W=w2400' />
                    </a> 
                </div>
            </div>
            <div className="work-example"></div>
            <div className="work-example"></div>
            <div className="work-example"></div>
            <div className="work-example"></div>
        </div>
    )
}