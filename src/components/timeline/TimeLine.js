import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css'

const TimeLine = (props) => {

    const studies = props.studies

    // studies.map((study) => {
    //     console.log(study.extras)
    // })

    const handleButton = (study) => {
        props.setFilter(study.institution.toLowerCase())
        props.onOpenModal()
        props.setTitleModal(study.institution.toUpperCase())
        props.setImgModal(study.icon)
    }

    return (
        <VerticalTimeline>
            {
                studies.map((study) => {
                    return(
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date = {study.time}
                            iconStyle={{ background: 'black', color: '#fff' }}
                            icon={<img src={study.icon} className={'timeline-icon'}/>}
                        >
                            <h4 className="vertical-timeline-element-title">{study.title}</h4>
                            <h5 className="vertical-timeline-element-subtitle">{study.institution}</h5>
                            <p>
                                {study.place}
                            </p>

                            {(study.section === 'formal' && study.extras === true ) ?
                                <button
                                    className={'btn my-btn-primary'}
                                    onClick={() => {handleButton(study)}}
                                >View details</button> :
                                null
                            }
                        </VerticalTimelineElement>
                    )
                }
                )
            }
        </VerticalTimeline>
    )
}

export default TimeLine