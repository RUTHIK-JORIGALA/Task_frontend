import React from 'react'
import './mainRight.css'
const name = "Notice Board"
const noticeName = name.split('');
function MainRight() {
  return (
    <div className='main-right'>
    <div className='main-right-content'>

      <i class="fa-solid fa-xmark"></i>
      {
        noticeName.map((currEle)=>{
            return <p>{currEle}</p>
        })
      }
      
    </div>
    <div className="white"></div>
    </div>
  )
}

export default MainRight
