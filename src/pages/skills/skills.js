import React, {useState} from 'react'
import './skills.css'
import skills from '../../assets/js/skills'
import SvgColor from "react-svg-color";
import {Container, Nav, ProgressBar, Row, Col} from "react-bootstrap";

const Skills = () => {

    // const [skillsRender, setSkillsRender] = useState(skills.filter((skill) => skill.category === 'language'))
    const [category, setCategory] = useState('language')

    const renderSkills = (filter) => {

        const skillsRender = skills.filter((skill) => skill.category === filter)

        return (

            <Row className={'skills scrollbar'}>
                {
                    skillsRender.map(
                        (skill) => {
                            let svg = skill.svg
                            return (
                                <Col xs={6} md={4} lg={3} className={'skill'}>
                                    <h4 className={'skill--title'}>
                                        {skill.name}
                                    </h4>
                                    <SvgColor
                                        svg={svg}
                                        width={80}
                                        colors={['#7EADCC', '#154E6B','#7EADCC','#154E6B','#7EADCC','#154E6B','#7EADCC','#154E6B']}
                                        className={'skill--icon'}

                                    />
                                    <ProgressBar
                                        now={skill.percent}
                                        animated={skill.inProgress}
                                        className={'skill--progress'}
                                    />
                                    <p className={'skill--text'}>
                                        {`${skill.percent}%`} {skill.inProgress ? '- in progress' : ''}
                                    </p>
                                </Col>
                            )
                        }
                    )
                }
            </Row>
        )
    }

    return (
        <div id={'skills'}>
            <Container className={'skills-container'}>
                <Nav fill variant={'tabs'}>
                    <Nav.Item onClick={()=>{setCategory('language')}} >
                        <Nav.Link className={'nav-item'}>Languages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={()=>{setCategory('framework')}}>
                        <Nav.Link className={'nav-item'}>Frameworks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item onClick={()=>{setCategory('tech')}}>
                        <Nav.Link className={'nav-item'} >Technologies</Nav.Link>
                    </Nav.Item>
                </Nav>

                {category === 'language' ? renderSkills('language') : ''}
                {category === 'framework' ? renderSkills('framework') : ''}
                {category === 'tech' ? renderSkills('tech') : ''}

            </Container>
        </div>
    )
}

export default Skills