import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Component.css/Explore.css'
import iconote from '../Images/pad.png'
import iconote2 from '../Images/home.png'
import iconote3 from '../Images/sketch.png'
import iconote4 from '../Images/work-from-home.png'
import iconote5 from '../Images/social-media.png'
import iconote6 from '../Images/growth.png'
import iconote7 from '../Images/care.png'
import iconote8 from '../Images/guitar.png'
import iconote9 from '../Images/education.png'

export default function Explore() {
  return (
    <>
      <Container className='exploremain' fluid>
    
        <h1 style={{fontSize:50,color:'#000000',fontWeight:900}}>Utforske <br />Våre populære kurs</h1>
       <div className='nameex' >
        <Link style={{textDecoration:'none'}}>Vis alle kategorier <FaArrowCircleRight/></Link>
        </div>
       <Row style={{marginTop:50}}>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Datavitenskap</h4>
                    <p className='txtex2'>Data er alt</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote2} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Virksomhet</h4>
                    <p className='txtex2'>Forbedre virksomheten din</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote3} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Kunst design</h4>
                    <p className='txtex2'>Moro og utfordrende</p>
                    </div>
                </div>
            </Card>
        </Col>
       </Row>
       <Row style={{marginTop:30}}>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote4} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Lyfestyle</h4>
                    <p className='txtex2'>Ny ferdighet, ny deg</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote5} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Markedsføring</h4>
                    <p className='txtex2'>Forbedre virksomheten din</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote6} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Finansiere</h4>
                    <p className='txtex2'>Moro og utfordrende</p>
                    </div>
                </div>
            </Card>
        </Col>
       </Row>
       <Row style={{marginTop:30}}>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote7} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Helse og fitness</h4>
                    <p className='txtex2'>Invester i kroppen din</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote8} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Musikk</h4>
                    <p className='txtex2'>Major eller moll</p>
                    </div>
                </div>
            </Card>
        </Col>
        <Col md={4}>
            <Card className='exploreCard'>
                <div className='explorediv'>
                    <Image src={iconote9} className='exico'></Image>
                    <div>
                    <h4 className='txtex'>Akademikere</h4>
                    <p className='txtex2'>Høyt utdanningsnivå</p>
                    </div>
                </div>
            </Card>
        </Col>
       </Row>
      </Container>
    </>
  )
}
