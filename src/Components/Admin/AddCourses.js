import { useMutation, useQuery } from '@apollo/client';
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row, Spinner, Table } from 'react-bootstrap';
import '../../Component.css/AddCourses.css'
import { MUTATION_CREATE_COURSE, MUTATION_CREATE_TOPIC, MUTATION_DELETE_COURSE, MUTATION_DELETE_TOPIC, MUTATION_SUB_TOPIC } from '../../graphql/Mutations';
import swal from 'sweetalert';
import { GET_ALL_COURSES, GET_TOPIC_BY_COURSE_ID } from '../../graphql/Query';
import { FaEye,FaPen,FaRegTrashAlt } from "react-icons/fa";

import { useStore } from 'reactflow';
import { MUTATION_UPDATE_TOPIC } from '../../graphql/Mutations';

export default function AddCourses() {

  let count = 1;
  let countTopic =1;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [validated, setValidated] = useState(false);

    const { data, loading } = useQuery(GET_ALL_COURSES)
    console.log("data",data)

    const [courseName, setCourseName] = useState('')
    const [description, setDescription] = useState('')
    const [createCourses, { loading: courseLoading }] = useMutation(MUTATION_CREATE_COURSE, {
        refetchQueries: [
            GET_ALL_COURSES
        ]
    })

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(true);
            event.preventDefault();
            event.stopPropagation();
        } else {
            setValidated(false);
            event.preventDefault();
            createCourses({
                variables: {
                    "coursesInput": {
                        "courseTitle": `${courseName}`,
                        "courseDescrition": `${description}`,
                      }
                }
            })
            setCourseName('')
            setDescription('')
            swal({
                title: "Vellykket påmelding!!!",
                text: "Vennligst Logg inn først",
                icon: "success",
            });
        }
    };

   const[courseId,setCourseId] =useState("")
   const[courseTitle,setCourseTitle] =useState("")
   const[topicTitle,setTopicTitle] =useState("")
   const[topicDescription,setTopicDescription]=useState("")

    function handleAddTopic(id ,courceTitle){
        setCourseId(id)
        setCourseTitle(courceTitle)
        handleShow()

    }

  
     const[createTopic,{loading:loadingTopic,data:dataTopic}] = useMutation(MUTATION_CREATE_TOPIC)

    const [validated2, setValidated2] = useState(false);

    const handleSubmit2 = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated2(true);
      }else{
        event.preventDefault();
        setValidated2(false)
        createTopic({
        variables:{
            "topicInput": {
                "courseId": `${courseId}`,
                "courseTitle": `${courseTitle}`,
                "topicTitle": `${topicTitle}`,
                "topicDescription": `${topicDescription}`,
              }
        }
        })
        handleClose()
      }
    };

   

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const[courseViewId,setCourseViewId] =useState()
    const [courseViewTitle,setCourseViewTitle] =useState()

    function handleViewTopic(id,title){
        setCourseViewId(id)
        setCourseViewTitle(title)
        handleShow2()
    }

    const{data:TopicData} = useQuery(GET_TOPIC_BY_COURSE_ID,{
        variables:{
            "courseId": `${courseViewId}`
        }
     })

     const [show3, setShow3] = useState(false);

     const handleClose3 = () => setShow3(false);
     const handleShow3 = () => setShow3(true);

   
     console.log("TopicData",TopicData)
     const[topicIdUp,setTopicIdUp] =useState("")
     const[topicTitleUp,setTopicTitleUp] =useState("")
     const[topicDescriptionUp,setTopicDescriptionUp] =useState("")

     function handleTopic(id,title,description){
     handleShow3()
     setTopicIdUp(id)
     setTopicTitleUp(title)
    setTopicDescriptionUp(description)
     }

     const[updateTopic] =useMutation(MUTATION_UPDATE_TOPIC,{
        refetchQueries:[
            GET_TOPIC_BY_COURSE_ID,
            "getTopicByCourseId"
        ]
     })

     function handleUpdateTopic(){
        updateTopic({
        variables:{
            "updateTopicInput": {
                "topicId": `${topicIdUp}`,
                "topicTitle": `${topicTitleUp}`,
                "topicDescription": `${topicDescriptionUp}`
              }
        }
        })  
        handleClose3();
     }
      
     const[deleteTopic] = useMutation(MUTATION_DELETE_TOPIC,{
        refetchQueries:[
            GET_TOPIC_BY_COURSE_ID,
            "getTopicByCourseId"
        ]
     })

     function handleDelete(id){
        deleteTopic({
        variables:{
            "topicId":`${id}`
        }
        })
     }


     

     const[createSubTopic,{loading:SubTopicLoading}] =  useMutation(MUTATION_SUB_TOPIC)
   
     const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const[subTopicTitle,setSubTopicTitle] =useState("")
    const[subTopicTopicDescription,setSubTopicDescription] =useState("")

    function handleSubTopic(topicId,topicTitle){
        setTopicIdUp(topicId)
        setTopicTitleUp(topicTitle)
        handleShow4()

    }

    const [validated4, setValidated4] = useState(false);

    const handleSubmit4 = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated4(true);
      }else{
        event.preventDefault();
        setValidated4(true);
        createSubTopic({
        variables:{
            "subTopicInput": {
                "courseId": `${courseViewId}`,
                "courseTitle": `${courseViewTitle}`,
                "topicId": `${topicIdUp}`,
                "topicTitle": `${topicTitleUp}`,
                "subTopicTitle": `${subTopicTitle}`,
                "subTopicTopicDescription": `${subTopicTopicDescription}`,
              }
            }
        })
        handleClose4()
      }
    };

    console.log("courseId",courseId)
    console.log("courseTitle",courseTitle)
    console.log("topicIdUp",topicIdUp)
    console.log("topicTitleUp",topicTitleUp)

     const[deleteCourse] = useMutation(MUTATION_DELETE_COURSE,{
      refetchQueries:[
        GET_TOPIC_BY_COURSE_ID,
        "getCourses"
      ]
     })

    function handleDeleteCourse(id){
      deleteCourse({
        variables:{
          "deleteCourseId": `${id}`
        }
      })
    }


    return (
        <>
            <Container style={{ marginTop: 20 }} fluid>
                <Row>
                    <Col md={4}>
                        <Card className='addcardcourse mx-auto d-block'>
                            <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>Add Course</h4>
                            <hr></hr>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                                        <Form.Label>Course Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Course Name"
                                            onChange={(e) => setCourseName(e.target.value)}
                                            value={courseName}
                                        />
                                       
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                                        <Form.Label style={{ marginTop: 20 }}>Description</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Description"
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                        />
                                       
                                    </Form.Group>

                                </Row>


                                <Button type="submit">Submit form</Button>
                            </Form>
                        </Card>
                    </Col>
                    <Col md={8}>
                      <div style={{height:420,overflow:'hidden', overflowY: "scroll"}}>
                        <Table style={{ marginTop: 20 ,fontFamily:"Dm sans",fontSize:12}} striped bordered hover>
                            <thead>
                                <tr>
                                    <th>SR No.</th>
                                    <th>Cource Name</th>
                                    <th>Description</th>
                                    <th>View Topic</th>
                                    <th>Add Topic</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ?
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                        :
                                        data && data.getCourses.slice().reverse().map(userData =>
                                            <tr>
                                                <td>{count++}</td>
                                                <td>{userData.courseTitle}</td>
                                                <td>{userData.courseDescrition}</td>
                                                <td> <Button variant="success" onClick={()=>handleViewTopic(userData.id,userData.courseTitle)}><FaEye/></Button></td>
                                                <td><Button onClick={()=>handleAddTopic(userData.id,userData.courseTitle)}>+</Button></td>
                                                <td><center><Button onClick={()=>handleDeleteCourse(userData.id)} variant="danger"><FaRegTrashAlt/></Button></center></td>
                                            </tr>

                                        )
                                }

                            </tbody>
                        </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose}>
               <h3 style={{fontFamily:"Dm sans",textAlign:"center",marginTop:10}}>Add Topic</h3>
               <hr></hr>
                <Modal.Body>
                <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <Form.Label  style={{fontFamily:"Dm sans",fontSize:"14px",fontWeight:"bold"}}>Topic Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Topic Title"
            style={{fontFamily:"Dm sans",fontSize:"12px",border:"2px solid #3498db"}}
            onChange={(e)=>setTopicTitle(e.target.value)}
           
          />
          
        </Form.Group>
      
       
      </Row>
      <Row>
      <Form.Group as={Col} md="12" controlId="validationCustom02">
          <Form.Label  style={{fontFamily:"Dm sans",fontSize:"14px",fontWeight:"bold"}}>Topic Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Topic Description"
            style={{fontFamily:"Dm sans",fontSize:"12px",border:"2px solid #3498db"}}
            onChange={(e)=>setTopicDescription(e.target.value)}
            
          />
        
        </Form.Group>
      </Row>
      
     
      <Button type="submit"  style={{fontFamily:"Dm sans",fontSize:"14px",marginTop:10,background:"#3498db",border:"none"}} className='mx-auto d-block'>Add Topic</Button>
    </Form>
                </Modal.Body>
            
            </Modal>

            <Modal show={show2} onHide={handleClose2}    size="lg" >
        <Modal.Header closeButton>
          <Modal.Title style={{fontSize:17,}}>All Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover style={{fontSize:12}}>
      <thead>
        <tr>
          <th>SR No.</th>
          <th>Topic Title</th>
          <th>Topic Description</th>
          <th><center>Add Sub Topic </center></th>
          <th><center>Edit Topic </center></th>
          <th><center>Delete Topic</center></th>
        </tr>
      </thead>
      <tbody>
        {
            TopicData && TopicData.getTopicByCourseId.map(list=>{
             return(

                <tr>
                <td>{countTopic++}</td>
                <td>{list.topicTitle}</td>
                <td>{list.topicDescription}</td>
                <td> <center><Button variant="primary" onClick={()=>handleSubTopic(list.id,list.topicTitle,)}>+</Button></center></td>
                <td><center> <Button variant="success" onClick={()=>handleTopic(list.id,list.topicTitle,list.topicDescription)} ><FaPen size={12}/></Button> </center></td>
                <td><center><Button variant="danger" onClick={()=>handleDelete(list.id)}><FaRegTrashAlt size={12}/></Button></center></td>
                
              </tr>

             )

            })
            


        }
       
        
       
      </tbody>
    </Table>
        </Modal.Body>
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
      <Modal.Header closeButton>
          <Modal.Title style={{fontSize:17,}}>Change Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row style={{marginTop:10}}>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
          
          <Form.Control
            required
            type="text"
            placeholder="Topic Title"
            value={topicTitleUp}
            onChange={(e)=>setTopicTitleUp(e.target.value)}
          />
 
        </Form.Group>
            </Row>

            <Row style={{marginTop:10}}>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
          
          <Form.Control
            required
            type="text"
            placeholder="Topic Description"
            value={topicDescriptionUp}
            onChange={(e)=>setTopicDescriptionUp(e.target.value)}
          />
 
        </Form.Group>
            </Row>
            <Button style={{marginTop:10}} className='mx-auto d-block' onClick={()=>handleUpdateTopic()}>Change Now</Button>
            </Modal.Body>
      </Modal>


      <Modal show={show4} onHide={handleClose4}
         size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Sub Topic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form noValidate validated={validated4} onSubmit={handleSubmit4}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label style={{fontSize:13}}>Sub Topic Title</Form.Label>
          <Form.Control
            required
            type="text"
            value={subTopicTitle}
            onChange={(e)=>setSubTopicTitle(e.target.value)}
            placeholder="Sub Topic Title"
            style={{fontSize:12}}
           
          />
          
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label style={{fontSize:13}}>Sub Topic Description</Form.Label>
          <Form.Control
            required
            type="text"
            value={subTopicTopicDescription}
            onChange={(e)=>setSubTopicDescription(e.target.value)}
            placeholder="Sub Topic Description"
            style={{fontSize:12}}
            
          />
        
        </Form.Group>
        
      </Row>
     
     
      <Button type="submit" className="mx-auto d-block">Add Sub Topic</Button>
    </Form>

        </Modal.Body>
       
      </Modal>

        </>
    )
}
