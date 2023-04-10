import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import bgimg from '../Images/hero-1-dot.png'
import bgimg2 from  '../Images/hero-1.jpg'
import bgimg3 from  '../Images/hero-sm-1.jpg'
import '../Component.css/MainHome.css'

export default function MainHome() {
  return (
    <>
    <Container style={{backgroundColor:'#edeef3',paddingTop:80,paddingLeft:50,paddingRight:20,paddingBottom:80}} fluid>
        <Row>
            <Col md={5}>
            <div className='circlebg d-none d-lg-block'></div>
            <div style={{position:'relative'}}>
                <h3 style={{fontSize:60,color:'#0e1133'}}>Tilgang 2700+</h3>
                <h3 style={{fontSize:65,color:'#0e1133',fontWeight:900}}>Online veiledning fra toppinstruktør.</h3>
                <p style={{color:'#0e1133',fontSize:30}}>Møt universiteter og kulturinstitusjoner, som deler sine erfaringer.</p>
                <Button style={{height:70,fontSize:20,fontWeight:600,padding:20}}>Se alle kurs</Button>
                </div>
            </Col>
            <Col md={7}>
                <div style={{position:'absolute'}}>
                    <div className='circlemain d-none d-lg-block'></div>
                    <Image className='bgMain' src={bgimg} />
                    <div className='bgmain2'></div>
                </div>
                <div style={{position:'relative'}}>
                <div style={{display:'flex'}}>
                <div className='imgmain'>
                   <Image src={bgimg2}  style={{height:'100%',width:'100%'}}/>
                   </div>
                  
                <div className='imgmain2 d-none d-lg-block'>
                   <Image src={bgimg3} className='imgmain33' />
                   </div>

                   </div>
                </div>
            </Col>
        </Row>
    </Container>  
    </>
  )
}
