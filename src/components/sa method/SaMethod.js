import React from 'react'
import './saMethod.css'
const SaMethod = ({title}) => {
  return (
    <section className='task'>
      <div className="task-title">
        <h3 className='task-heading'>{title}</h3>
        <p className='icon-task'>i</p>
      </div>
      <div className="task-description">
        <p><b>Description:</b> To Explore more read more</p>
      </div>
      <div className='thread '>
        <i class="fa-solid fa-chevron-up"></i>
        <p>Introduction</p>
      </div>
      <div className="introduction">
        <p>The 4SA Method , How to bring a idea into progress ?</p>
        <p className='bottom-right-more'>See More</p>
      </div>
      <div className='thread'>
        <i class="fa-solid fa-chevron-up"></i>
        <p>Thread A</p>
      </div>
      <div className="introduction">
        <p>How are you going to develop your stratergy ? Which method are 
          you going to use to develop a stratergy ? What if the project is lengthy?</p>
        <p className='bottom-right-more'>See More</p>
      </div>
    </section>
  )
}

export default SaMethod
