import React, {useState} from 'react'
import './Study.css'
import {Col, Container, Row} from "react-bootstrap";
import TimeLine from "../../../components/timeline/TimeLine";
import studies from "../../../assets/js/studies";
import CustomModal from "../../../components/Modal/Modal";

const useFilterStudies = () => {

    const [filter, setFilter] = useState('')

    const filterStudies = studies.filter((study) => {
        return study.section === filter
    })

    return [filterStudies, setFilter]
}

const Study = () => {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [filterStudies, setFilterStudies] = useFilterStudies()
    const [titleModal, setTitleModal] = useState('')
    const [imgModal, setImgModal] = useState(null)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const formalStudies = studies.filter((study) => {
        return study.section === 'formal'
    })

    console.log(filterStudies)

    return (
        <section id={'study'}>
            <Container className={'study-container'}>
                <Row className={'study-container'}>
                    <Col
                        md={4}
                        className={'container__study-title'}
                    >
                        <div className={'study-title'}>
                            <h2>STUDY</h2>
                        </div>

                    </Col>
                    <Col
                        md={8}
                        className={'timeline-container'}
                    >
                        <TimeLine
                            studies={formalStudies}
                            onOpenModal={handleOpenModal}
                            setFilter={setFilterStudies}
                            setTitleModal={setTitleModal}
                            setImgModal={setImgModal}
                        />
                    </Col>
                </Row>
                <CustomModal
                    onClose={handleCloseModal}
                    isOpen={isOpenModal}
                    title={titleModal}
                    image={imgModal}
                >
                    <TimeLine studies={filterStudies}/>
                </CustomModal>
            </Container>
        </section>
    )
}

export default Study