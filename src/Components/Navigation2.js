import React from 'react'
import { Button, Container, Form, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import '../Component.css/Navigation.css'
import logo from '../Images/logo.png'

export default function Navigation2() {
    const navigate = useNavigate();
    function navigateLogin() {
        navigate('/login')
    }
    const admintoken = localStorage.getItem('adminToken')
    function adminlogoutHandle() {
        localStorage.removeItem('adminToken')
        window.location.reload()
    }
    const token1 = localStorage.getItem('userToken')
    function userlogoutHandle() {
        localStorage.removeItem('userToken')
        localStorage.removeItem('userId')
        window.location.reload()
    }


    return (
        <>

            <Navbar bg="light" expand="lg" sticky="top">
                <Container style={{ paddingLeft: 40, paddingRight: 40 }} fluid>
                    <Navbar.Brand href="#"><Image src={logo} style={{ height: '50px', width: '150px' }}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>



                            <Link to="/" className="titleNavbar">Hjem</Link>

                            <NavDropdown className="titleNavbar1" title="Kurs" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Kurs</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Kurs action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Kurs else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="titleNavbar1" title="Blogg" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Blogg</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Blogg action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Blogg else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="titleNavbar1" title="Sider" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Sider</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                Sider action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                Sider else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/Demo" className="titleNavbar">Kontakt</Link>
                            <Link to="/Cource" className="titleNavbar">Cource</Link>
                            {
                                admintoken ?
                                    <>
                                        <Link to="/admindashboard" className="titleNavbar" >Dashbord</Link>
                                        <Link to="/" className="titleNavbar" onClick={() => adminlogoutHandle()}>Logg ut</Link>
                                    </>
                                    : ''
                            }
                            {
                                token1 ?
                                    <>
                                        <Link to="/userdashboard/profile" className="titleNavbar" >Dashbord</Link>

                                        <Link to="/" className="titleNavbar" onClick={() => userlogoutHandle()} >Logg ut</Link>
                                    </>
                                    : ''
                            }
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Søk"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Søk</Button>
                        </Form>
                        {
                            token1 ?
                                ''
                                :
                                <Button onClick={() => navigateLogin()} variant="outline-success" style={{ marginLeft: '20px' }}>Logg Inn</Button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>



            {/* <Navbar collapseOnSelect expand="lg" variant="dark" bg="#050622" sticky="top" style={{ backgroundColor: '#020f18' }} >
                <Container>
                    <Navbar.Brand>
                        <Link to='/'>

                            <Image src='https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg' style={{ height: '60px', width: '120px' }}></Image>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" ><FaBars style={{ color: '#fff' }} /></Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className="titleNavbar">Home</Link>
                            <Link to="/about" className="titleNavbar">About Us</Link>
                            <Link to="/" className="titleNavbar">Portfolio</Link>
                            <Link to="/" className="titleNavbar">Our Team</Link>
                            <Link to="/" className="titleNavbar">Testimonials</Link>
                            <Link to="/career" className="titleNavbar">Career</Link>
                         
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </>
    )
}
