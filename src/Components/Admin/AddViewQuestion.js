import { useMutation, useQuery } from '@apollo/client';
import React,{useState} from 'react'
import { Container ,Row ,Col, Card,Form,Button,Table,Modal} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import { MUTATION_ADD_QUESTION, MUTATION_QUESTION_UPDATE } from '../../graphql/Mutations';
import { GET_SUB_TOPIC_BY_ID } from '../../graphql/Query';
import { FaEye,FaRegEdit ,FaRegTrashAlt,FaPlay} from "react-icons/fa";

export default function AddViewQuestion() {

    const [validated, setValidated] = useState(false);
    const [questType,setQuestType] =useState("")
    const [questionTitle,setQuestionTitle] =useState()
    const [obj1,setObj1] =useState("")
    const [obj2,setObj2] =useState("")
    const [obj3,setObj3] =useState("")
    const [obj4,setObj4] =useState("")
    const [correctAnswer,setCorretAnswer] =useState("")
    const [answer,setAnswer] = useState("")
    const [mark,setMark] =useState("")
    const [videoUrl,setVideoUrl] =useState("")

    console.log("videoUrl",videoUrl)

    let count = 1;
    let questCount = 1;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [datatView,setDataView] =useState()

  const [source, setSource] = React.useState();
  const [Url ,setUrl] =useState()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
  };
  
  const location = useLocation();
  console.log("subTopic",location.state.id)
  const{data,loading} = useQuery(GET_SUB_TOPIC_BY_ID,{
    variables:{
        "subTopicId":`${location.state.id}`  
    }
})



    const[addQuestion] =useMutation(MUTATION_ADD_QUESTION,{
      refetchQueries:[
        GET_SUB_TOPIC_BY_ID,
        "getSubTopicById"
      ]
    })
    
    var obj = []

  
  console.log(data,"data")
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
      }else{
        event.preventDefault();
        setValidated(false);
        obj.push(obj1)
        obj.push(obj2)
        obj.push(obj3)
        obj.push(obj4)
        addQuestion({
            variables:{
                "addQuestionInput": {
                    "subTopicId": `${location.state.id}`,
                    "questions": [
                      {
                        "questionTitle": `${questionTitle}`,
                        "objective": obj,
                        "correctAnswer": `${correctAnswer}`,
                        "answer": `${answer}`,
                        "mark": `${mark}`,
                        "questionType": `${questType}`,
                        "video": "null",
                        "status": "active"
                      }
                    ]
                  }
            }
        })
       
        setQuestionTitle("")
        setObj1("")
        setObj2("")
        setObj3("")
        setObj4("")
        setCorretAnswer("")
        setAnswer("")
        setMark("")


      }
    };


    function handleView(data){
        setDataView(data)
        handleShow()
    }

    console.log(datatView)

    function handleVideo(){
        addQuestion({
            variables:{
                "addQuestionInput": {
                    "subTopicId": `${location.state.id}`,
                    "questions": [
                      {
                        "questionTitle": "",
                        "objective": "",
                        "correctAnswer": "",
                        "answer": "",
                        "mark": "",
                        "questionType": `${questType}`,
                        "video": `${videoUrl}`,
                        "status": "active"
                      }
                    ]
                  }
            }
        })

    }

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

     function handlePlay(uri){
        handleShow2()
        const url = URL.createObjectURL(uri);
        setUrl(url)
       
     }
  
     const [show3, setShow3] = useState(false);

     const handleClose3 = () => setShow3(false);
     const handleShow3 = () => setShow3(true);
     const [getData,setGetData] =useState()
        
     const [questionTitleEdit,setQuestionTitleEdit] =useState()
     const [obj1Edit,setObj1Edit] =useState("")
     const [obj2Edit,setObj2Edit] =useState("")
     const [obj3Edit,setObj3Edit] =useState("")
     const [obj4Edit,setObj4Edit] =useState("")
     const [correctAnswerEdit,setCorretAnswerEdit] =useState("")
     const [answerEdit,setAnswerEdit] = useState("")
     const [markEdit,setMarkEdit] =useState("")
     const [questionId,setQuestionId] =useState("")


     function handleEdit(data){
      handleShow3()
      setGetData(data)
      setQuestionTitleEdit(getData&&getData.questionTitle)
      setObj1Edit()
      setObj2Edit()
      setObj3Edit()
      setObj4Edit()
      setQuestionId(getData&&getData.id)
      setCorretAnswerEdit(getData&&getData.correctAnswer)
      setAnswerEdit(getData&&getData.answer)
      setMarkEdit(getData&&getData.mark)
     }


     console.log("getData",getData)

     const[updateQuestion] = useMutation(MUTATION_QUESTION_UPDATE,{
      refetchQueries:[
        GET_SUB_TOPIC_BY_ID,
        "getSubTopicById"
      ]
     })


     function handleUpdate(){
      updateQuestion({
      variables:{
        "subTopicId": `${ data && data.getSubTopicById.id}`,
        "questionId": `${questionId}`,
        "questionTitle": `${questionTitleEdit}`,
        "answer": `${answerEdit}`,
        "correctAnswer": `${correctAnswerEdit}`,
        "mark": `${markEdit}`
      }
      })
      handleClose3()
     }


 

  return (
   <Container>
    <h3 style={{textAlign:"center"}}>Add Question</h3>
   <Row>
   <Col md={5}>
     <Card style={{marginTop:10}}>

        <Container>
            <h5 style={{marginTop:10}}>Add Question & Video</h5>
            
            <Form.Group>
                        <Form.Select style={{ fontFamily: 'DM Sans', fontSize: '12px',marginBottom:5 }} onChange={(e) => setQuestType(e.target.value)} >
                          <option value="" selected="selected" disabled="disabled">Select </option>
                          <option value="Objective">Objective</option>
                          <option value="Video">Video</option>
                          
                        </Form.Select>
                      </Form.Group>
    {
       
         questType === "Objective" ?
         <Form noValidate validated={validated} onSubmit={handleSubmit}>
         <Row className="mb-3">
           <Form.Group as={Col} md="12" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Question Title"
               value={questionTitle}
               onChange={(e)=>setQuestionTitle(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj1}
               onChange={(e)=>setObj1(e.target.value)}
               placeholder="Objective 1"
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj2}
               placeholder="Objective 2"
               onChange={(e)=>setObj2(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj3}
               placeholder="Objective 3"
               onChange={(e)=>setObj3(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj4}
               placeholder="Objective 4"
               onChange={(e)=>setObj4(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
   
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Correct Answer"
               value={correctAnswer}
               onChange={(e)=>setCorretAnswer(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Answer"
               value={answer}
               onChange={(e)=>setAnswer(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
   
         <Row>
   
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Mark"
               value={mark}
               onChange={(e)=>setMark(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
   
        
         <Button type="submit" style={{marginBottom:10,fontFamily:"Dm sans",marginTop:12}} className='mx-auto d-block'>Add Question</Button>
       </Form>
         :
         questType === "Video" ?
         <>
             <Form.Group as={Col} md="12" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Video Url"
               onChange={(e)=>setVideoUrl(e.target.value)}
               accept="video/mp4"
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
           <Button type="submit" style={{marginBottom:10,fontFamily:"Dm sans",marginTop:12}} className='mx-auto d-block' onClick={()=>handleVideo()}>Add Video</Button>
           {

             source === undefined?
            <></>
             :
             <div>
             <video width="100%" height="240" src={source} controls type="video/mp4">
              </video>
              </div>

           }
          
         </>
         :

         <>
         
         </>



    }

    
    </Container>
     </Card>

   </Col>
   <Col md={7}>
   <div style={{height:420,overflow:'hidden', overflowY: "scroll"}}>
   <Table striped bordered hover size="sm" style={{marginTop:10,fontSize:13,fontFamily:"Dm sans"}}>
      <thead>
        <tr>
          <th>SR No.</th>
          <th>Question Title</th>
          <th>Correct Answer</th>
          <th>Mark</th>
          <th>Answer</th>
          <th>Play Video</th>
          <th>View</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          data && data.getSubTopicById.questions === null ?
          <h1>Data not Available</h1>

          :
          <>
          {

            data && data.getSubTopicById.questions.map(item=>{

                return(
                    <tr>
                    <td>{count++}</td>
                    {
                          item.questionType  === "Video" ?
                          <>
                          <td colspan="4">{item.video}</td>
                         <td><Button variant="outline-success" onClick={()=>handlePlay(item.video)}><FaPlay/></Button></td>
                          <td><Button variant="outline-primary" onClick={()=>handleView(item)}><FaEye/></Button></td>
                          <td><Button variant="outline-success" onClick={()=>handleEdit(item)}><FaRegEdit/></Button></td>
                          <td><Button variant="outline-danger"><FaRegTrashAlt/></Button></td>
                          </>
                          :
                          <>
                          <td>{item.questionTitle}</td>
                          <td>{item.correctAnswer}</td>
                          <td>{item.mark}</td>
                          <td>{item.answer}</td>
                          <td><Button variant="outline-success" onClick={()=>handlePlay(item.video)}><FaPlay/></Button></td>
                          <td><Button variant="outline-primary" onClick={()=>handleView(item)}><FaEye/></Button></td>
                          <td><Button variant="outline-success" onClick={()=>handleEdit(item)}><FaRegEdit/></Button></td>
                          <td><Button variant="outline-danger"><FaRegTrashAlt/></Button></td>
                          </>
                    }
                   
                  </tr>
                )
            })
        }

</>
        }
        
      </tbody>
    </Table>
    </div>
   </Col>
   </Row>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>{datatView && datatView.questionTitle}</h6>
          {
              datatView && datatView.objective.map(list=>{
                return(

                    <h6 style={{fontSize:12}}>({questCount++}) {list}</h6>
                )
              })

          }
          <h6 style={{color:"#2ecc71",fontSize:13}}>Answer : <span>{ datatView && datatView.answer}</span></h6>
          <h6 style={{color:"#000",fontSize:13}}>Correct Answer : <span>{ datatView && datatView.correctAnswer}</span></h6>
          <h6 style={{color:"#2980b9",fontSize:13}}>Mark : <span>{ datatView && datatView.correctAnswer}</span></h6>
        </Modal.Body>
      
      </Modal>


      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Video Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <video width="100%" height="240" src={Url} controls type="video/mp4">
              </video>

        </Modal.Body>
      
      </Modal>

      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Change Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
         <Row className="mb-3">
           <Form.Group as={Col} md="12" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Question Title"
               value={questionTitleEdit}
               onChange={(e)=>setQuestionTitleEdit(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
         {/* <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj1}
               onChange={(e)=>setObj1(e.target.value)}
               placeholder="Objective 1"
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj2}
               placeholder="Objective 2"
               onChange={(e)=>setObj2(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj3}
               placeholder="Objective 3"
               onChange={(e)=>setObj3(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               value={obj4}
               placeholder="Objective 4"
               onChange={(e)=>setObj4(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
    */}
         <Row>
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Correct Answer"
               value={correctAnswerEdit}
               onChange={(e)=>setCorretAnswerEdit(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
   
           <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Answer"
               value={answerEdit}
               onChange={(e)=>setAnswerEdit(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
   
         <Row>
   
         <Form.Group as={Col} md="6" controlId="validationCustom01">
             <Form.Control
               required
               type="text"
               placeholder="Mark"
               value={markEdit}
               onChange={(e)=>setMarkEdit(e.target.value)}
               style={{marginTop:10,fontSize:12}}/>
           </Form.Group>
         </Row>
   
        
         <Button type="submit" style={{marginBottom:10,fontFamily:"Dm sans",marginTop:12}} className='mx-auto d-block' onClick={()=>handleUpdate()}>Add Question</Button>
       



        </Modal.Body>
        
      </Modal>
   </Container>
  )
}
