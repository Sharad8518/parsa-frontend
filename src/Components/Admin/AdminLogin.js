import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import Footer from '../Footer'
import Lottie from 'react-lottie';
import * as animationData from '../../Images/133387-carrega-me.json'
import Navigation2 from '../Navigation2';
import { useMutation } from '@apollo/client';
import { MUTATION_ADMIN_LOGIN } from '../../graphql/Mutations';
import { Navigate } from 'react-router-dom';

export default function AdminLogin() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const token = localStorage.getItem('adminToken')
    const [error, setError] = useState(false)
    const [adminLogin, { data, loading }] = useMutation(MUTATION_ADMIN_LOGIN, {
        onError(error) {
            setError(true)
        }
    });

    const [validated, setValidated] = useState(false);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            setValidated(false);
            event.preventDefault();
            adminLogin({
                variables: {
                    "username": `${username}`,
                    "password": `${password}`
                }
            })
        }
    };

    if (data) {
        localStorage.setItem('adminToken', data.adminLogin.adminToken)
        localStorage.setItem('adminId', data.adminLogin.adminId)
        return <Navigate to="/" />
    }

    if (token) {
        return <Navigate to="/" />
    }
    return (
        <>
            <Navigation2 />
            <Container style={{ padding: 40 }} fluid>
                <Row>
                    <Col md={6}>
                        <div className='userloginn'>
                            <Lottie options={defaultOptions}
                                height={'100%'}
                                width={'60%'}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h4 style={{ textAlign: "center", fontWeight: 600, paddingBottom: '30px' }}>Admin pålogging</h4>

                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Skriv inn brukernavn " style={{ height: '50px', width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setUsername(e.target.value)} value={username} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Control required type="password" placeholder="Oppgi passord " style={{ marginTop: '20px', height: '50px', width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setPassword(e.target.value)} value={password} />
                            </Form.Group>

                            {
                                error ?
                                    <h1 style={{ fontSize: '12px', color: 'red', textAlign: 'center' }}>Brukernavn og passord stemmer ikke!!!</h1> : ''
                            }

                            {
                                loading ?
                                    <Spinner animation="border" variant="success" />
                                    :
                                    <Button className='mx-auto d-block' style={{ marginTop: '40px', backgroundColor: '#032276', height: '50px', width: '60%', borderRadius: '20px' }} type="submit">Logg Inn</Button>

                            }
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
