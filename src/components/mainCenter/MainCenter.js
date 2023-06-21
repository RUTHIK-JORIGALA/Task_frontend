import React from 'react'
import './mainCenter.css'
import ProjectManagement from '../projectManagement/ProjectManagement'
import SaMethod from '../sa method/SaMethod'
import ThreadBuild from '../threadBuild/ThreadBuild'
import StructurePointers from '../structurePointers/StructurePointers'
import data from '../../data.json'

const MainCenter = () => {

  const{short_description ,  tasks} = data;
  // console.log( tasks);
  const newdata = []
  // tasks.map((currEle)=>newdata.push(currEle.assets))
  // console.log(newdata);
  // newdata.map((currEle)=>console.log(currEle[3]))
  // newdata.forEach((currEle)=>console.log(currEle))
  // for(let i of newdata){
  //   for(let ele in i )
  //   console.log(i[ele].asset_title);
 
  // }

  const titles = [];
  tasks.map((currEle)=>{
    return(
      currEle.assets.map((currEle)=>titles.push(currEle.asset_title))
    )
  })
  const title0 = titles[0]
  const title1 = titles[1];
  const title2 = titles[2];
  const title3 = titles[3];
  return (
    <section className='main-center'>
        <div className="center-header">
            <h1 className='project-heading'>Technical Project Management</h1>
            <button className='btn'>Submit task</button>
        </div>
        <div className="main-description">
            <h3>Explore the world of management</h3>
            <p>As a project manager, you play an important reole in leading a project through initiation,
                 planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?</p>
        </div>
        <div className="tasks-container">
            <ProjectManagement shortDes = {short_description} title= {title0}/>
            <ThreadBuild title= {title1}/>
            <StructurePointers title= {title2}/>
            <SaMethod title= {title3}/>
        </div>
    </section>
  )
}

export default MainCenter 

