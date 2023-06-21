import React from 'react'
import './threadBuild.css'
import {BsFillChatRightTextFill , BsFillChatSquareQuoteFill} from 'react-icons/bs'
const ThreadBuild = ({title}) => {
  return (
    <section className='task'>
      <div className="task-title">
        <h3 className='task-heading'>{title}</h3>
        <p className='icon-task'>i</p>
      </div>
      <div className="task-description">
        <p><b>Description:</b> Watch the video and threadbuild, and jot out key threads while watching the video</p>
      </div>
      <div className='thread'>
        <i class="fa-solid fa-chevron-up"></i>
        <p>Thread A</p>
      </div>
      <div className='under-thread'>
        <div className='sub-threads' >
          <div className='sub-thread'>
            <p>Sub thread 1</p>
            <textarea rows='5' cols="17"  placeholder='Enter Text here'/>
          </div>
          <div className='sub-interpretion'>
            <p>Sub Interpretation 1</p>
            <textarea rows='5' cols="17" placeholder='Enter Text here'/>
          </div>
        </div>
        <div className='task-icon-drop'>
          <i class="fa-sharp fa-solid fa-lightbulb"></i>
          <BsFillChatRightTextFill/>
          <BsFillChatSquareQuoteFill/>
          <i class="fa-solid fa-spa"></i>
          <div className='task-dropdown'>
            <p>Select Categ</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div className='task-dropdown'>
            <p>Select Proces</p>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
        </div>
        <div className="btn">+ Sub-thread</div>
        <div className="summary">
          <p>Summary of Thread A</p>
          <textarea className='summary-text' placeholder='Enter Text Here' />
        </div>
      </div>
      
    </section>
  )
}

export default ThreadBuild
