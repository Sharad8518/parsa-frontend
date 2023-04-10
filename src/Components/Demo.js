import { useCallback,useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges,Background,Controls,MiniMap,addEdge, ReactFlowProvider } from 'reactflow';
import 'reactflow/dist/style.css';

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
    data: { label: <div>Default Node</div> },
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

// const initialNodes = [
//     {
//       id: '1',
//       type: 'input',
//       data: { label: 'Input Node' },
//       position: { x: 250, y: 25 },
//     },
  
//     {
//       id: '2',
//       // you can also pass a React component as a label
//       data: { label: <div><Button onClick={()=>alert("ok")}>send</Button></div> },
//       position: { x: 100, y: 125 },
//     },
//     {
//       id: '3',
//       type: 'output',
//       data: { label: 'Output Node' },
//       position: { x: 250, y: 250 },
//     },

//     {
//         id: '4',
//         type: 'sanjay',
//         data: { label: 'Sanjay Node' },
//         position: { x: 300, y: 300 },
//       },
//       {
//         id: '5',
//         type: 'sanjay Child 1 ',
//         data: { label: 'Sanjay Child 5' },
//         position: { x: 80, y: 80 },
//       },

//       {
//         id: '6',
//         type: 'sanjay Child 2 ',
//         data: { label: 'Sanjay Child 4' },
//         position: { x: 70, y: 70 },
//       },

//       {
//         id: '7',
//         type: 'sanjay Child 3 ',
//         data: { label: 'Sanjay Child 3' },
//         position: { x: 50, y: 50 },
//       },
//   ];
  
//   const initialEdges = [
//     { id: 'e1-2', source: '1', target: '2' },
//     { id: 'e2-3', source: '2', target: '3', animated: true },
//     { id: 'e3-4', source: '2', target: '4', animated: true },
//     { id: 'e5-5', source: '4', target: '5', animated: true },
//     { id: 'e6-6', source: '4', target: '6', animated: true },
//     { id: 'e6-7', source: '4', target: '7',  },
//   ];

  // const initialNodes = [
  //   {
  //     id: '1',
  //     type: 'input',
  //     data: { label: 'input node' },
  //     position: { x: 250, y: 5 },
  //   },
  // ];
  
  // let id = 0;
  // const getId = () => `dndnode_${id++}`;

  // const initialNodes = [
  //   {
  //     id: '1',
  //     type: 'input',
  //     data: { label: 'Node 0' },
  //     position: { x: 250, y: 5 },
  //     className: 'light',
  //   },
  //   {
  //     id: '2',
  //     data: { label: 'Group A' },
  //     position: { x: 100, y: 100 },
  //     className: 'light',
  //     style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 200, height: 200 },
  //   },
  //   {
  //     id: '2a',
  //     data: { label: 'Node A.1' },
  //     position: { x: 10, y: 50 },
  //     parentNode: '2',
  //   },
  //   { id: '3', data: { label: 'Node 1' }, position: { x: 320, y: 100 }, className: 'light' },
  //   {
  //     id: '4',
  //     data: { label: 'Group B' },
  //     position: { x: 320, y: 200 },
  //     className: 'light',
  //     style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 300, height: 300 },
  //   },
  //   {
  //     id: '4a',
  //     data: { label: 'Node B.1' },
  //     position: { x: 15, y: 65 },
  //     className: 'light',
  //     parentNode: '4',
  //     extent: 'parent',
  //   },
  //   {
  //     id: '4b',
  //     data: { label: 'Group B.A' },
  //     position: { x: 15, y: 120 },
  //     className: 'light',
  //     style: { backgroundColor: 'rgba(255, 0, 255, 0.2)', height: 150, width: 270 },
  //     parentNode: '4',
  //   },
  //   {
  //     id: '4b1',
  //     data: { label: 'Node B.A.1' },
  //     position: { x: 20, y: 40 },
  //     className: 'light',
  //     parentNode: '4b',
  //   },
  //   {
  //     id: '4b2',
  //     data: { label: 'Node B.A.2' },
  //     position: { x: 100, y: 100 },
  //     className: 'light',
  //     parentNode: '4b',
  //   },
  // ];
  
  // const initialEdges = [
  //   { id: 'e1-2',  type:"circle", source: '1', target: '2', animated: true },
  //   { id: 'e1-3', type:"circle", source: '1', target: '3' },
  //   { id: 'e2a-4a', shape:"hexagon",  source: '2a', target: '4a' },
  //   { id: 'e3-4', source: '3', target: '4' },
  //   { id: 'e3-4b', source: '3', target: '4b' },
  //   { id: 'e4a-4b1', source: '4a', target: '4b1' },
  //   { id: 'e4a-4b2', source: '4a', target: '4b2' },
  //   { id: 'e4b1-4b2', source: '4b1', target: '4b2' },
  // ];
    


  export default function Demo() {

//     const [nodes, setNodes] = useState(initialNodes);
//     const [edges, setEdges] = useState(initialEdges);
  
//     const onNodesChange = useCallback(
//       (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
//       [setNodes]
//     );
//     const onEdgesChange = useCallback(
//       (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
//       [setEdges]
//     );
//     const onConnect = useCallback(
//       (connection) => setEdges((eds) => addEdge(connection, eds)),
//       [setEdges]
//     );

// const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
// const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

// const onConnect = useCallback((connection) => {
//   setEdges((eds) => addEdge(connection, eds));
// }, []);
const [nodes, setNodes] = useState(initialNodes);
const [edges, setEdges] = useState(initialEdges);
const [name,setName] =useState()

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
   position:{x:Math.random() * window.innerWidth,y:Math.random()*window.innerHeight}
  }))

}

const onConnect =(params)=> setNodes(e=>addEdge(params,e))


  return (
   <div>
      <div className='mx-auto d-block' style={{width:500,height:700,border:"1px solid #000"}}>
      <ReactFlow
      nodes={nodes}
      edges={edges}
      onLoad={onLoad}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      connectionLineStyle={{stroke:"#ddd",strokeOpacity:2}}
      connectionLineType="bezier"
      snapToGrid={true}
      snapGrid={[16,16]}
      fitView>
      <Background/>
      <Controls/>
      <MiniMap
      nodeColor={n=>{
        if(n.type === "input") return "blue";
          return "#ffcc00"

      }}
      
      />


      </ReactFlow>
    <div>
    <input type="text" name='title'   onChange={(e)=>setName(e.target.value)}/>
    <button  type="button" onClick={()=>addNode()} >Add Node</button>
   


    </div>
  

        {/* <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView>
      <Background />
        <Controls />
    </ReactFlow> */}
 {/* <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      className="react-flow-subflows-example"
      fitView
    >
      <MiniMap />
      <Controls />
      <Background />
    </ReactFlow> */}

    </div>
      </div>
  )
}
