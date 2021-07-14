import React from 'react'
import HeaderAbout from './about/header/header'
import PersonalInfo from './about/personal_info/personalInfo'
import Study from "./about/study/study";

const AboutPage = ({showNav}) => {
    return (
        <div id={'about-page'}>
            <HeaderAbout showNav={showNav}/>
            <PersonalInfo />
            <Study />
        </div>
    )
}

export default AboutPage
