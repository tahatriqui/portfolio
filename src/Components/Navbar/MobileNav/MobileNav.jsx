import React from 'react'
import "./MobileNav.css"
import taha from '../img1.png'

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
      <div
      className={`mobile-menu ${isOpen ?"active":""}`}
      onClick={toggleMenu}>
          <div className="mobile-menu-container">
            <img className='logo' src={taha} alt="" />
            <ul>
            <li>
                <a  href='#Home' className='menu-item'>Home</a>
              </li>
            <li>
                <a  href='#skills' className='menu-item'>Skils</a>
            </li>
            <li>
                <a  href='#contactme' className='menu-item'>Contact me</a>
            </li>
            <li>
                <a  href='#Projects' className='menu-item'>Projects</a>
            </li>

            
            <button className='contact-btn' onClick={()=>{}}>
              Hire Me
            </button>
            </ul>
          </div>
      </div>
    </>
  )
}

export default MobileNav