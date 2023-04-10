import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FaChevronRight, FaLock, FaPen, FaTrash } from 'react-icons/fa'

export default function Profile() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card style={{ width: '20rem', height: '100%',marginTop:'30px' }}>
                            <Card.Body>
                                <h1 style={{ fontSize: 15, padding: 8, fontWeight: 'normal', cursor: 'pointer', fontFamily: "TerminaMedium" }}><FaPen style={{ marginTop: '-4px' }} /> Edit your profile <span ><FaChevronRight style={{ marginTop: '-4px' }} /></span></h1>
                                <hr></hr>
                                {/* <h1 onClick={() => handleShow1()} style={{ fontSize: 15, padding: 8, fontWeight: 'normal', cursor: 'pointer' }}><FaImage style={{ marginTop: '-4px' }} /> Change your avatar <span ><FaChevronRight style={{ marginTop: '-4px' }} /></span></h1>
                                    <hr></hr> */}
                                <h1 style={{ fontSize: 15, padding: 8, fontWeight: 'normal', cursor: 'pointer', fontFamily: "TerminaMedium" }}><FaLock style={{ marginTop: '-4px' }} /> Reset yout password <span ><FaChevronRight style={{ marginTop: '-4px' }} /></span></h1>
                                <hr></hr>
                                <h1 style={{ fontSize: 15, padding: 8, fontWeight: 'normal', cursor: 'pointer', color: '#e74c3c', fontFamily: "TerminaMedium" }}><FaTrash style={{ marginTop: '-4px' }} /> Delete Account <span ><FaChevronRight style={{ marginTop: '-4px' }} /></span></h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={8}></Col>
                </Row>
            </Container>
        </>
    )
}
