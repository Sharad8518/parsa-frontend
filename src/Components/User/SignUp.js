import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Footer from '../Footer'
import Navigation2 from '../Navigation2'
import Lottie from 'react-lottie';
import * as animationData from '../../Images/70640-floating-magic-link-login.json'
import '../../Component.css/Userlogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_USER } from '../../graphql/Mutations';
import swal from 'sweetalert';

export default function SignUp() {

    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const [validated, setValidated] = useState(false);
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    
    const [checkerror, setCheckError] = useState(false)

    const [createUser1, { data, error, loading: userLoading }] = useMutation(MUTATION_CREATE_USER)
    console.log("error", error)
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
        }
         else if(!(password === confirmpass)) {
            setValidated(false);
            event.preventDefault();
            setCheckError(true)
         }
        else {
            setValidated(false);
            event.preventDefault();
            createUser1({
                variables: {
                    "user1Input": {
                        "fName": `${fName}`,
                        "lName": `${lName}`,
                        "contact": `${contact}`,
                        "email": `${email}`,
                        "password": `${password}`,

                    }
                }
            })
            setFname('')
            setLname('')
            setContact('')
            setEmail('')
            setpassword('')
        }

    };

    if (data) {
        swal({
            title: "Vellykket påmelding!!!",
            text: "Vennligst Logg inn først",
            icon: "success",
        });
        navigate('/login')
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
                                width={'100%'}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <h4 style={{ textAlign: "center", fontWeight: 600, paddingBottom: '30px' }}> Melde deg på </h4>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Control required type="text" placeholder="Skriv inn fornavn" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setFname(e.target.value)} value={fName} />
                                    </Form.Group>

                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Control required type="text" placeholder="Skriv inn etternavn" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setLname(e.target.value)} value={lName} />
                                    </Form.Group>

                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Control required type="number" placeholder="Skriv inn kontakt" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setContact(e.target.value)} value={contact} />
                                    </Form.Group>

                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="validationCustom01">
                                        <Form.Control required type="email" placeholder="Skriv inn din email" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setEmail(e.target.value)} value={email} />
                                    </Form.Group>

                                </Col>
                            </Row>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Control required type="password" placeholder="Lag et passord" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setpassword(e.target.value)} value={password} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Control required type="password" placeholder="Bekreft Passord" style={{ fontSize: '14px', height: 60, width: '100%', border: 'none', borderBottom: '2px solid #032276 ', borderRadius: '20px' }} onChange={(e) => setConfirmpass(e.target.value)} value={confirmpass} />
                            </Form.Group>
                            {
                                checkerror === true ?
                                        <h6 style={{ color: "red", marginTop: 5, fontSize: 18, textAlign: 'center' }}>Bekreft passord ikke samsvarer!!!!</h6>
                                 :
                                  ''
                            }
                            {
                                error ?
                                    <>
                                        <h6 style={{ color: "#c0392b", marginTop: 5, fontSize: 14, textAlign: 'center' }}>Denne e-posten finnes allerede!!!</h6>
                                    </>
                                    :
                                    <></>
                            }
                            <Form.Check style={{ marginTop: '20px', fontSize: 13, fontFamily: "TerminaMedium" }} required type="checkbox" label="Jeg godtar alle vilkårene for bruk og retningslinjer for akseptabel bruk." />


                            <Button className='mx-auto d-block' style={{ fontSize: '14px', marginTop: '40px', backgroundColor: '#032276', height: '50px', width: '60%', borderRadius: '20px' }} type='submit'>Melde deg på</Button>
                            <p style={{ textAlign: 'center', marginTop: 20 }}>Hvis du allerede har en konto, vennligst <Link to='/login'>Logg inn</Link></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
