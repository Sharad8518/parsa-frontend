import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import '../Component.css/Pricing.css'
import bestvalue from '../Images/best-value-tag-150x150-removebg-preview.png'

export default function Pricing() {
  return (
    <>
      <Container style={{marginTop:'30px'}}>
        <h2 style={{fontSize:50,textAlign:'center',fontWeight:900,color:'#000000'}}>Enkel <br/> Alt inkludert priser</h2>
        <p style={{textAlign:'center'}}>Ingen kontrakter. Ingen overraskelsesgebyrer.</p>

        <Row style={{marginTop:'60px'}}>
            <Col md={1}></Col>
            <Col md={5}>
                <Card className='pricingcard'>
                    <h2 style={{fontWeight:800}}>Gull</h2>
                    <p>Perfekt for små markedsføringsteam</p>
                    <p style={{fontSize:55,fontWeight:900}}>$39<span style={{fontSize:15,fontWeight:'normal'}}>.99 / Månedlig </span></p>
                   <hr></hr>
                    <p className='pricecourse' style={{marginTop:30}} ><FaCheckCircle /> Kursdiskusjoner</p>
                    <p className='pricecourse' ><FaCheckCircle /> Innholdsbibliotek</p>
                    <p className='pricecourse' ><FaCheckCircle /> 1 times mentorskap</p>
                    <Button style={{height:'50px',width:'200px',fontSize:20,marginTop:40}}>Kom i gang</Button>
                </Card>
            </Col>
            <Col md={5}>
                <Card className='pricingcard'>
                <div className='d-none d-lg-block' style={{height:150,width:150,position:'absolute',marginLeft:330,marginTop:'-55px'}}>
                <Image src={bestvalue} style={{height:'100%',width:'100%'}} /></div>
                <div style={{position:'relative'}}>
                    <h2 style={{fontWeight:800}}>Diamant</h2>
                    <p>Perfekt for små markedsføringsteam</p>
                    <p style={{fontSize:55,fontWeight:900}}>$79<span style={{fontSize:15,fontWeight:'normal'}}>.99 / Månedlig </span></p>
                   <hr></hr>
                    <p className='pricecourse' style={{marginTop:30}} ><FaCheckCircle /> Kursdiskusjoner</p>
                    <p className='pricecourse' ><FaCheckCircle /> Innholdsbibliotek</p>
                    <p className='pricecourse' ><FaCheckCircle /> 1 times mentorskap</p>
                    <p className='pricecourse' ><FaCheckCircle /> Nettkurs</p>
                    <Button style={{height:'50px',width:'200px',fontSize:20,marginTop:40}}>Kom i gang</Button>
                </div>
                </Card>
            </Col>
            
            <Col md={1}></Col>
        </Row>
      </Container>
    </>
  )
}
