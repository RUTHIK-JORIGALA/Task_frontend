import React, { useState } from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import './mainLeft.css'
const MainLeft = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () =>{
    setToggle(!toggle);
    
  }
  const mainClass = toggle ?"mainLeft" : "mainLeft close"
  return (
    <div className={`${mainClass}`}>
      <div className="mainLeft-top">
        <h3>Journey Board</h3>
        <div className="arrow-icon">

        <BsFillArrowLeftCircleFill onClick={handleToggle}/>
        </div>
      </div>
      <div className="mainLeft-tasks">
        <ul><li>Explore the world of management</li></ul>
        <ul>
            <li>Technical Project Management</li>
            <li>Threadbuild </li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
        </ul>
      </div>
    </div>
  )
}

export default MainLeft
