import React from 'react'
import HeaderAbout from './about/header/header'
import PersonalInfo from './about/personal_info/personalInfo'
import Study from "./about/study/study";
import Contact from "./about/contact/contact";

const AboutPage = ({showNav}) => {
    return (
        <div id={'about-page'}>
            <HeaderAbout showNav={showNav}/>
            <PersonalInfo />
            <Study />
            <Contact />
        </div>
    )
}

export default AboutPage
