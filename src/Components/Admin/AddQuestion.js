import { useMutation, useQuery } from '@apollo/client'
import React,{useState} from 'react'
import {Table,Button,Modal,Row,Col,Form} from "react-bootstrap"
import { GET_ALL_SUB_TOPIC } from '../../graphql/Query'
import { AiFillPlusCircle } from 'react-icons/ai';
import { MUTATION_ADD_QUESTION, MUTATION_DELETE_SUB_TOPIC } from '../../graphql/Mutations';
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function AddQuestion() {

 const{data} = useQuery(GET_ALL_SUB_TOPIC)

 const navigation = useNavigate()

 console.log("data",data)

 let count = 1;

 const [show, setShow] = useState(false);
 const[subTopicId,setSubTopicId] =useState("")

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 function handleClick(id){
  setSubTopicId(id)
  navigation("/admindashboard/AddViewQuestion",{ state:{subTopicId:subTopicId}})
 }

console.log("subTopicId",subTopicId)

 const[obj1,setObj1] =useState("")
 const[obj2,setObj2] =useState("")
 const[obj3,setObj3] =useState("")
 const[obj4,setObj4] =useState("")

 
 let counter = 0;
 const [questionDetails, setQuestiontDetails] = useState([{ questionTitle: '', objective: '', correctAnswer: '' ,answer:'',mark:'',questionType:'',video:'',status:''}]);

 let addFormFields = () => {
  setQuestiontDetails([...questionDetails, { questionTitle: '', objective: '', correctAnswer: '' ,answer:'',mark:'',questionType:'',video:'',status:''}]);
};


let handleChange = (e, i, nameValue) => {
  let newFormValues = [...questionDetails];
  newFormValues[i][nameValue] = e;
  setQuestiontDetails(newFormValues);
};

 const[addQuestion] =useMutation(MUTATION_ADD_QUESTION)

function handleComplete(){
  addQuestion({
  variables:{
    "addQuestionInput": {
      "subTopicId": `${subTopicId}`,
      "questions": questionDetails
    }
  }
  })
}

 const[deleteSubTopic] =  useMutation(MUTATION_DELETE_SUB_TOPIC,{
  refetchQueries:[
    GET_ALL_SUB_TOPIC,
    "getAllSubTopic"
  ]
 })

function handleDelete(id){
  deleteSubTopic({
   variables:{
    "deleteSubTopicId": `${id}`
   }

  })
}


  return (
    <div>
         <Table striped bordered hover style={{fontSize:12}}>
      <thead>
        <tr>
          <th>SR No.</th>
          <th>Course Title</th>
          <th>Topic Title</th>
          <th>Sub Topic Title</th>
          <th>Sub Topic Description</th>
          <th>Add Question</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        { 

        data && data.getAllSubTopic.map(list=>{
          
          return(
            <tr>
            <td>{count++}</td>
            <td>{list.courseTitle}</td>
            <td>{list.topicTitle}</td>
            <td>{list.subTopicTitle}</td>
            <td>{list.subTopicTopicDescription}</td>
            <td><center><Button onClick={()=>navigation("/admindashboard/AddViewQuestion",{
                    state:{
                      id:list.id
                    }
                   })}>+</Button></center></td>
            <td><center><Button onClick={()=>handleDelete(list.id)} variant="danger"><FaRegTrashAlt/></Button></center></td>
          </tr>

          )



        })




        }
       
    
      </tbody>
    </Table>




    <Modal show={show} onHide={handleClose}  size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Row>
                         
                            {questionDetails.map((input, key) => (
                                <Row>
                                    <h6 className="mt-5" style={{ fontFamily: 'DM Sans' }}>
                                        Question {(counter += 1)}
                                        <div style={{ backgroundColor: '#ffb606 ', height: 1, width: '7%', marginTop: 10 }}>
                                            {' '}
                                        </div>
                                    </h6>
                                    <Col md={12} lg={12} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Question Title</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="Question Title" onChange={(e) => handleChange(e.target.value, key, 'questionTitle')} value={input.questionTitle} />
                                        </Form.Group>
                                    </Col>
                                    <Row>
                                    <Col md={3} lg={3} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Objective 1</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="objective " onChange={(e) => handleChange(e.target.value, key, 'objective')} value={input.objective} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={3} lg={3} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Objective 2</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="objective " onChange={(e) => handleChange(e.target.value, key, 'objective')} value={input.objective} />
                                        </Form.Group>


                                    </Col> 
                                    <Col md={3} lg={3} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Objective 3</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="objective " onChange={(e) => handleChange(e.target.value, key, 'objective')} value={input.objective} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={3} lg={3} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Objective 3</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="objective " onChange={(e) => handleChange(e.target.value, key, 'objective')} value={input.objective} />
                                        </Form.Group>
                                    </Col>


                                    </Row>
                                    <Col md={4} lg={4} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Correct Answer</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="correct Answer" onChange={(e) => handleChange(e.target.value, key, 'correctAnswer')} value={input.correctAnswer} onWheel={(e) => e.target.blur()} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} lg={4} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}>Answer</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder=" Answer" onChange={(e) => handleChange(e.target.value, key, 'answer')} value={input.answer} onWheel={(e) => e.target.blur()} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} lg={4} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}> Mark</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="Mark" onChange={(e) => handleChange(e.target.value, key, 'mark')} value={input.mark} onWheel={(e) => e.target.blur()} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} lg={4} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}> Question Type</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="Question Type" onChange={(e) => handleChange(e.target.value, key, 'questionType')} value={input.questionType} onWheel={(e) => e.target.blur()} />
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} lg={4} className="mt-5">
                                        <Form.Group>
                                            <Form.Label style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 'bold' }}> Video</Form.Label>
                                            <Form.Control type="text" style={{ fontFamily: 'DM Sans', fontSize: '12px' }} placeholder="video" onChange={(e) => handleChange(e.target.value, key, 'video')} value={input.video} onWheel={(e) => e.target.blur()} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            ))}
                            <Col md={6} lg={4} className="mt-5">
                                <Button onClick={() => addFormFields()} className="m-1" style={{ fontFamily: 'DM Sans', fontSize: '12px' }}>
                                    <AiFillPlusCircle style={{ fontSize: '20px' }} />
                                </Button>
                            </Col>
                        </Row>

                        <Button type="submit" className='mx-auto d-block' onClick={()=>handleComplete()}>Add Question</Button>

        </Modal.Body>
       
      </Modal>
    </div>
  )
}
