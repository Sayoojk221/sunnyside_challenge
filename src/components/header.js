import React from 'react'
import Navabr from './navBar'

function Header() {
  return (
    <div className='header'>
        <Navabr />
        <div className='headerContent'>
          <h2>WE ARE CREATIVES</h2>
          <img src='https://i.ibb.co/MSv2H70/arrow.png'  />
        </div>
    </div>
  )
}

export default Header