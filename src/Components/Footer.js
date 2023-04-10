import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebookSquare, FaMapMarker, FaMapMarkerAlt, FaMarker, FaMobileAlt, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Component.css/Footer.css'

export default function Footer() {
  return (
    <>
      <Container className='bgFootetr' fluid>
         <Row>
            <Col md={4} >
                <h2 style={{color:'#ffffff',fontWeight:800,marginTop:10}}><FaMarker />pedagogisk</h2>
              <div style={{width:'60%'}}>  <p style={{color:'gray',marginTop:'20px',fontSize:17}}>Flotte leksjonsideer og leksjonsplaner for ESL-lærere! Lærere kan tilpasse leksjonsplaner til best mulig.</p></div>
            <div style={{display:'flex',marginTop:15}}><FaFacebookSquare style={{height:50,width:50,color:'#3742fa'}}/> <FaTwitterSquare style={{height:50,width:50,color:'#03a9f4'}} /> <FaPinterestSquare style={{height:50,width:50,color:'#d2173f'}}/></div>
            </Col>
            <Col md={2}>
                <h3 style={{color:'#ffffff',fontWeight:800,paddingBottom:20,marginTop:10}}>Selskap</h3>
                <Link className='footerlink'>Om</Link><br />
                <Link className='footerlink'>Kurs</Link><br />
                <Link className='footerlink'>arrangementer</Link><br />
                <Link className='footerlink'>Instruktør</Link><br />
                <Link className='footerlink'>Karriere</Link><br />
                <Link className='footerlink'>Bli lærer</Link><br />
                <Link className='footerlink'>Kontakt</Link><br />
               
            </Col>
            <Col md={2}>
                <h3 style={{color:'#ffffff',fontWeight:800,paddingBottom:20,marginTop:10}}>Plattform</h3>
                <Link className='footerlink'>Bla gjennom biblioteket</Link><br />
                <Link className='footerlink'>Bibliotek</Link><br />
                <Link className='footerlink'>Partnere</Link><br />
                <Link className='footerlink'>Nyheter og blogger</Link><br />
                <Link className='footerlink'>Vanlige spørsmål</Link><br />
                
                <Link className='footerlink'>Veiledninger</Link><br />
               
            </Col>
            <Col md={4} style={{textAlign:'center'}}>
            <div style={{width:'90%'}}>
                <h3 style={{color:'#ffffff',fontWeight:800,paddingBottom:20,marginTop:10}}>Kontakt</h3>
                 <p style={{color:'gray',marginTop:'20px',fontSize:17}}><FaMapMarkerAlt style={{color:'red'}}/> Flotte leksjonsideer og leksjonsplaner for ESL-lærere! Lærere kan tilpasse leksjonsplaner til best mulig.</p>
              <p style={{color:'gray',marginTop:'20px',fontSize:17}}><FaMobileAlt style={{color:'red'}}/> +31 00000-00000</p></div>
               
            </Col>
         </Row>
         <hr style={{color:'#ffffff',marginTop:100}}></hr>
         <p style={{color:'gray',textAlign:'center'}}>© 2022 Educal, med enerett. Design av <a href='https://softseekersinfotech.com/' style={{textDecoration:'none',color:'#ffffff'}}>Softseekers Infotech</a></p>
      </Container>
    </>
  )
}
