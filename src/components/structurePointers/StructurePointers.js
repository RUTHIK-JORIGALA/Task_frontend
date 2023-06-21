import React from 'react'
import {BsArrow90DegLeft, BsArrow90DegRight, BsArrowsFullscreen , BsThreeDots} from 'react-icons/bs'
import './structure.css'
const StructurePointers = ({title}) => {
  return (
    <section className='task'>
      <div className="task-title">
        <h3 className='task-heading'>{title}</h3>
        <p className='icon-task'>i</p>
      </div>
      <div className='inner-container'>

        <div className="task-description">
          <p><b>Description:</b> Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world</p>
        </div>
        <div className="title">
          <h4>Title</h4>
          <input className='title-input'/>
        </div>
        <div className="content">
          <h4>Content</h4>
          <div className="options">
            <div className="row1">
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Insert</button>
              <button>Format</button>
              <button>Tools</button>
              <button>Table</button>
              <button>Help</button>
            </div>
            <div className="row2">
              <BsArrow90DegLeft/>
              <BsArrow90DegRight/>
              <BsArrowsFullscreen/>
              <button>paragraph</button>
              <BsThreeDots/>
            </div>
          </div>
          <input className='content-input'/>
        </div>
      </div>
    </section>
  )
}

export default StructurePointers
