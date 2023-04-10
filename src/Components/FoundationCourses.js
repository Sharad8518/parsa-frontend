import React from 'react'
import '../Component.css/Foundation.css'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import foundimg from '../Images/banner-img-1.png'
import foundimg2 from '../Images/banner-img-2.png'

export default function FoundationCourses() {
  return (
    <>
      <Container className='foundMain' fluid>
           <Row>
            <Col md={6}>
                 <Card className='foundCard'>
                    <Row>
                        <Col>
                            <Button className='btfound'>Gratis</Button>
                            <h2 className='txtfound' style={{fontWeight:900,marginTop:30}}>Tyskland Foundation Document</h2>
                             <Button className='btnFound' style={{marginTop:40}}>Se kurs</Button>
                        </Col>
                        <Col>
                            <Image src={foundimg} style={{height:'100%',width:'120%'}} />
                        </Col>
                    </Row>
                 </Card>
            </Col>
            <Col md={6}>
                 <Card className='foundCard2'>
                    <Row>
                        <Col>
                            <Button className='btfound2'>Ny</Button>
                            <h2 className='txtfound' style={{fontWeight:900,marginTop:30}}>Nettkurs fra Eduka University</h2>
                             <Button className='btnFound' style={{marginTop:40}}>Finne ut mer</Button>
                        </Col>
                        <Col>
                            <Image src={foundimg2} style={{height:'100%',width:'100%'}} />
                        </Col>
                    </Row>
                 </Card>
            </Col>
           
           </Row>
      </Container>
    </>
  )
}
