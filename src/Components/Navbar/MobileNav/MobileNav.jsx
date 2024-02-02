import React from 'react'
import "./MobileNav.css"

const MobileNav = ({isOpen,toggleMenu}) => {
  return (
    <>
      <div
      className={`mobile-menu ${isOpen ?"active":""}`}
      onClick={toggleMenu}>
          <div className="mobile-menu-container">
            <img className='logo' src="img1.png" alt="" />
            <ul>
            <li>
                <a rel="noreferrer" href='#Home' className='menu-item'>Home</a>
              </li>
            <li>
                <a rel="noreferrer" href='#skills' className='menu-item'>Skils</a>
            </li>
            <li>
                <a rel="noreferrer" href='#contactme' className='menu-item'>Contact me</a>
            </li>
            <li>
                <a rel="noreferrer" href='#Projects' className='menu-item'>Projects</a>
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