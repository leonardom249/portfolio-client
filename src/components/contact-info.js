import React from 'react'
import '../component-css/contact-info.css';

export function ContactInfo (){
    return(
        <div className="contact">
           <h4>Contact Information:</h4>
           <p> 
              Email:  <a href="mailto:leonardo.megan@gmail.com?subject=Portfolio Inquiry">leonardo.megan@gmail.com</a>
           </p>
           <p>
               Phone Number: 631-903-2012
           </p>
           <p>
               Location: Austin, TX and Remote
           </p>
        </div>
    )
}