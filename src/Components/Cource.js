import React, { useState } from 'react'
import Navigation2 from './Navigation2'
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { FaPlay,FaExclamation } from 'react-icons/fa';

export default function Cource() {
 
    const[one,setOne] =useState(false)
    const[two,setTwo] =useState(false)


  return (
    <>
    <Navigation2/>
    <div style={{display:"flex"}}>
        <div style={{width:300}}>
            <h6 style={{marginLeft:10,marginTop:10,fontWeight:"bold"}}>Campus</h6>
            <h4 style={{marginLeft:10,marginTop:10,fontWeight:"bold"}}>
                Matte S1
            </h4>
            <div style={{display:"flex",justifyItems:"center"}}>
            <div style={{background:"#f1f2f6",width:250,height:2}}>

            </div>
            </div>
           
      <Navigation
            // you can use your own router's api to get pathname
            style={{background:"#000"}}
            activeItemId="/management/members"
            onSelect={({itemId}) => {
              // maybe push to the route
            }}
            items={[
             
              {
                title: '1 operation',
                itemId: '/management',
                // elemBefore: () => <Icon name="users" />,
                subNav: [
                  {
                    title: 'Projects',
                    itemId: '/management/projects',
                  },
                  {
                    title: 'Members',
                    itemId: '/management/members',
                  },
                ],
              },
              {
                title: '2 operation',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
            ]}
          />
          </div>
          
          <div>
   
    <div style={{display:"flex",marginTop:10}}>
     <div style={{width:40,height:40,border:"1px solid #1e90ff",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"#1e90ff",color:"#fff"}}> <FaPlay/></div>
     {
       one === true ?
<div  style={{display:"flex",alignItems:"center"}}> 
    <div style={{width:80,height:2,background:"#1e90ff"}}></div>
     <div style={{width:40,height:40,border:"1px solid #1e90ff",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"#1e90ff",color:"#fff"}}>
      <FaExclamation/>
     </div>
     </div>
       :
<div  style={{display:"flex",alignItems:"center"}} onClick={()=>setOne(true)}> 
    <div style={{width:80,height:2,background:"#000"}}></div>
     <div style={{width:40,height:40,border:"1px solid #000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
     <FaExclamation/>
     </div>
     </div>

     }
     {
         two === true ?
         <div  style={{display:"flex",alignItems:"center",}}> 
         <div style={{width:80,height:2,background:"#1e90ff"}}></div>
          <div style={{width:40,height:40,border:"1px solid #1e90ff",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"#1e90ff",color:"#fff"}}>
          <FaPlay/>
          </div>
          </div>
         :
         <div  style={{display:"flex",alignItems:"center"}} onClick={()=> setTwo(true)}> 
         <div style={{width:80,height:2,background:"#000"}}></div>
          <div style={{width:40,height:40,border:"1px solid #000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",}}>
          <FaPlay/>
          </div>
          </div>}
     <div  style={{display:"flex",alignItems:"center"}}> 
    <div style={{width:80,height:2,background:"#000"}}></div>
     <div style={{width:40,height:40,border:"1px solid #000",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%"}}>
     <FaExclamation/>
     </div>
     </div>

    </div>
    
    
    </div>
    </div>
    </>
  )
}
