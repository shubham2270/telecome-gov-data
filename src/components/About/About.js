import React from 'react';
import './about.css';


const About = () => {
   return ( 
    <div className='about_wrapper'>
        <h1>About</h1>

        <p>I had created this small website to get hands-on of React Js. <br/><br/></p> 
        <p>
            The data of Telephone page is fetched from data.gov.in API which shows numbers of
            telephones (wired vs wireless) in India from 2009 to 2014 of only december month
            of each year.
             <br/><br/>
        </p>
        <p>
            Number Trivia data is fetched from rapidapi.com which shows random number trivia on clicking
            'Get Random Trivia' button, you can also get trivia based on your number you can enter in number field.

        </p>
    </div>
 )
}

export default About;