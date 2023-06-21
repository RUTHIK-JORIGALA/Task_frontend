import React from 'react'
import './main.css'
import MainCenter from '../mainCenter/MainCenter'
import MainRight from '../main-right/MainRight'
import MainLeft from '../mainLeft/MainLeft'
const Main = () => {
  return (
    <section className='main-section'>
      <MainLeft/>
      <MainCenter/>
      <MainRight/>
    </section>
  )
}

export default Main
