import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css'
import WorkIcon from '../../assets/svg/cucumber_icon.svg'
import studies from '../../assets/js/studies'

const TimeLine = () => {


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
                            <h4 className="vertical-timeline-element-title">{study.institution}</h4>
                            <h5 className="vertical-timeline-element-subtitle">{study.place}</h5>
                            <p>
                                {study.title}
                            </p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    )
}

export default TimeLine