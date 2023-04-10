import { useCallback,useState } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import ReactFlow, { applyEdgeChanges, applyNodeChanges,Background,Controls,MiniMap,addEdge, ReactFlowProvider, ControlButton } from 'reactflow';
import 'reactflow/dist/style.css';
import Navigation2 from '../Navigation2';

export default function Diagram() {

    const initialNodes = [
        {
          id: '1',
          type: 'input',
          data: { label: 'Input Node' },
          position: { x: 250, y: 25 },
        },
      
        {
          id: '2',
          // you can also pass a React component as a label
          data: { label: <div><button onClick={()=>alert("ok")}>Button</button></div> },
          position: { x: 100, y: 125 },
        },
        {
          id: '3',
          type: 'output',
          data: { label: 'Output Node' },
          position: { x: 250, y: 250 },
        },
      ];
      
      const initialEdges = [
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e2-3', source: '2', target: '3', animated: true },
      ];
      
      const onLoad =(reactFlowInstance)=>{
          reactFlowInstance.fitView();
      }
      


      const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);
const [name,setName] =useState()

console.log("nodes",nodes)

const onNodesChange = useCallback(
  (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
  [setNodes]
);
const onEdgesChange = useCallback(
  (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
  [setEdges]
);

const addNode =()=>{
  setNodes((e)=>e.concat({
   id:(e.length+1).toString(),
   data:{label:`${name}`},
   position:{x:Math.random() * window.innerWidth,  y:Math.random()*window.innerHeight}
  }))

}

const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);


  return (
    <>
    <Container fluid>
        <Row>
          <Col md={3}>
            <h5 style={{textAlign:"center",marginTop:20}}>Create Node</h5>
          <div style={{display:"block"}}>
    <input type="text" name='title'  placeholder='Node Title' onChange={(e)=>setName(e.target.value)}  style={{fontFamily:"Dm sans",width:"100%",height:"50%",padding:10,borderRadius:10,outline:"none"}}/>
    
   


    </div>
    <button  type="button" onClick={()=>addNode()}  style={{width:"100%",padding:7,borderRadius:10,marginTop:20,fontFamily:"Dm sans",background:"#000",color:"#fff"}}>Add Node</button>

          </Col>
          <Col md={9}>
         <div style={{width:900,height:500}}>
        <ReactFlow
      nodes={nodes}
      edges={edges}
      onLoad={onLoad}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionLineStyle={{stroke:"#ddd",strokeWidth:2}}
      connectionLineType="#000"
      snapToGrid={true}
      snapGrid={[16,16]}
      fitView>
      <Background/>
      <Controls showInteractive={false}>
       
        </Controls>
      <MiniMap
      nodeColor={n=>{
        if(n.type === "input") return "blue";
          return "#ffcc00"

      }}
      
      />


      </ReactFlow>
      </div>

            
          </Col>

        </Row>




    </Container>
    
    </>
  )
}
