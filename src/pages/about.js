import React from 'react'
import HeaderAbout from './about/header/header'
import PersonalInfo from './about/personal_info/personalInfo'

const AboutPage = ({showNav}) => {
    return (
        <div >
            <HeaderAbout showNav={showNav}/>
            <PersonalInfo />
        </div>
    )
}

export default AboutPage
