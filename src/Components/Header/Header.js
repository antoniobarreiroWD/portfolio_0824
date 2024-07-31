import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'
import logo from '../../Assets/barb.png'  
import { header } from '../../portfolio'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            <img src={logo} alt={title} className='logo' />  
          </a>
        ) : (
          <img src={logo} alt={title} className='logo' />
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header
