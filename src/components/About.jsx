import React from 'react';
import Footer from './Footer';
import Header from './Header';
import aboutVector from './../assets/about_vector.png';
import './About.css';
import aboutAnime from './../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Full Stack Developer | Love to teach | Uplifting the student community in the field of tech and personal growth'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    
                    <h2 className='about-sub-head'>Qualifications</h2>
                    <p className='about-details'>
                        <b>B.Tech (2017-2021)</b>
                        <br />
                        Information Technology
                        <br />
                        <b className='num-color'>8.87 CGPA</b>
                        <br />
                        <hr/>
                        <b>12<sup>th</sup> Board (2015-16)</b>
                        <br />
                        P.C.M
                        <br />
                        <b className='num-color'>84%</b>
                        <hr/>
                       <b>10<sup>th</sup> Board (2013-14)</b> 
                        <br />
                        Science
                        <br />
                        <b className='num-color'>9.4 CGPA</b>
                    </p>
                {/* Sub section 2 */}
                    <h2 className='about-sub-head'>Work Experience</h2>
                    <p className='about-details'>
                       <b> TCS (Jul'2021 - Current)</b>
                        <br/>
                        <b className='num-color'>Assistant System Engineer</b>
                        <ul>
                        <li>Working in core JAVA Team which handles an international Project</li>
                         <li>Role is to maintain database of the application and to handle issues related to database.</li>
                        <li>Also, to analyze the application and servers to solve real time issues if occur.</li>
                         <li>Deployed a change in the production environment</li>
                        </ul>
                    </p>
                    
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <Footer
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;