import React from 'react';
import FooterLink from './Footer';
import Header from './Header';
import './Contact.css';
import contactVector from './../assets/contact_anime.png';

import github from './../assets/gh.png';
import linkedin from './../assets/li.png';
import instagram from './../assets/in.png';


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch.'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            {/* Form section */}
            <div className='contact-form-container'>
                <form className='contact-form'
                    action="https://formspree.io/f/mnqwlwve"
                    method="POST">
                    {/* Email Id Input */}
                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    {/* Email Body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    {/* Submit button */}
                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            {/* Social icons */}
            <div className='social-icons-container'>
                <a href='https://github.com/Pragati7979/' className='social-icon'>
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/pragati-srivastava77/'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
                <a
                    href='https://www.instagram.com/pragati_sri_79/'
                    className='social-icon'
                >
                    <img src={instagram} alt='social' />
                </a>
               
            </div>
            
            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;