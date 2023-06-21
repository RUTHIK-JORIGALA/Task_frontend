import React from 'react'
import './projectManagement.css'
const ProjectManagement = (props) => {
  const {shortDes,title} = props;
  return (
    <section className='task'>
      <div className="task-title">
        <h3 className='task-heading'>{title}</h3>
        <p className='icon-task'>i</p>
      </div>
      <div className="task-description">
        <p><b>Description:</b> {shortDes}</p>
      </div>
      <div className="task-video">
      <iframe width="100%" height="280px" src="https://www.youtube.com/embed/ZnH5RxGYg2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default ProjectManagement
