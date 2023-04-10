import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Navigation2 from '../Navigation2'
import Lottie from 'react-lottie';
import * as animationData from '../../Images/70640-floating-magic-link-login.json'
import '../../Component.css/Userlogin.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { MUTATION_USER_LOGIN } from '../../graphql/Mutations';

export default function UserLogin() {
   

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const [error, setError] = useState(false)
    const [loginUser, { data, loading }] = useMutation(MUTATION_USER_LOGIN, {
        onError(error) {
            setError(true)
        }
    });
    const token = localStorage.getItem('userToken')

    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('')
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
            loginUser({
                variables: {
                    "email": `${email}`,
                    "password": `${password}`
                  }
            })
        }
    };
    if (data) {
        localStorage.setItem('userToken', data.loginUser.userToken)
        localStorage.setItem('userId', data.loginUser.userId)
        return <Navigate to="/" />
    }

    if (token) {
        return <Navigate to="/" />
    }
    return (
        <>
            <Navigation2 />
            <Container style={{  padding: 40 }} fluid>
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
                        <h4 style={{ textAlign: "center", fontWeight: 600, paddingBottom: '30px' }}> Logg Inn </h4>
                    <Form.Group className="mb-3" controlId="validationCustom01">
                      <Form.Control required type="email" placeholder="Skriv inn din email" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setEmail(e.target.value)} value={email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="validationCustom01">
                      <Form.Control required type="password" placeholder="Oppgi passord" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setPassword(e.target.value)} value={password}/>
                    </Form.Group>
                    {
                        error?
                        <>
                         <h5 style={{textAlign:'center',color:'red'}}>E-post og passord stemmer ikke</h5>
                        </>
                       :
                       ''
                    }
                    <Button className='mx-auto d-block' style={{ fontSize: '14px', marginTop: '40px', backgroundColor: '#032276', height: '50px', width: '60%', borderRadius: '20px' }} type='submit'>Logg inn</Button>
                          <p style={{textAlign:'center',marginTop:20}}>Hvis du ikke har noen konto, vennligst <Link to='/signup'>Melde deg på</Link></p>
                  </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
