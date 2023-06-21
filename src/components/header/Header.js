import React from 'react'
import './header.css'
const Header = () => {
  return (
    <header className='header'>
      <div className="header-logo">
        <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="Company logo" class="logo-title"/>
      </div>
      <div className="header-icons">
        <div className="icon-container">
          <i class="fa-solid fa-house" ></i>  
        </div>
        <div className="icon-container">
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </div>
        <div className="icon-container bell-icon">
          <i class="fa-solid fa-bell"></i>
        </div>
        <img class="profile-img" src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="profile"/>

        <i class="fa-solid fa-ellipsis-vertical vertical-ellipse-icon"></i>
        
       
      </div>
    </header>
  )
}



export default Header
