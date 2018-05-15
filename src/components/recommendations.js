import React from 'react'

export function Recommendations (){
    return(
        <div className="recommendations">
            <blockquote className="recommend">
                <h4>Megan is awesome...</h4>
                    ...rest of recommendation
                <footer>
                    -Author of Recommendation 
                    <em> What they do for a living</em>
                </footer>
            </blockquote>
            <blockquote className="recommend"></blockquote>
            <blockquote className="recommend"></blockquote>
            
        </div>
    )
}