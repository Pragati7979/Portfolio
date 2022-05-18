import React from 'react';
import FooterLink from './Footer';
import Header from './Header';
import { skillList } from './../assets/skillsData';
import './Skills.css';
import skill_bg from './../assets/skill_bg.jpg'

import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading='My Skills.'
                details="Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!"
            />

            <div className='skill-card-container'>
                {skillList.map(({ skillName, skillUrl }) => (
                    <SkillCard skillName={skillName} skillUrl={skillUrl} />
                ))}
            </div>

            <FooterLink phrase='Get in ' link='touch.' toAdress='/contact' />

            <div className='skills-vector-frame'>
                <img
                    src={skill_bg}
                    alt='skills'
                    className='skills-vector'
                />
            </div>

        </div>
    );
};

export default Skills;