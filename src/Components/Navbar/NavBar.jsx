import React, { useState } from 'react'
import "./NavBar.css"
import MobileNav from './MobileNav/MobileNav'

const NavBar = () => {
    const [openMenu,setOpenMenu] = useState(false)

    const toggleMenu = () =>{
        setOpenMenu(!openMenu)
    }

  return (
    <> 
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src='img1.png' alt='' />
                <ul>
                    <li>
                        <a href='#Home' className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href='#skills' className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a href='#contactme' className='menu-item'>Contact me</a>
                    </li>
                    <li>
                        <a href='#Projects' className='menu-item'>Projects</a>
                    </li>
                    <button className='contact-btn' onClick={()=>{}}>
                        Hire me
                    </button>
                    
                </ul>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span className="material-symbols-outlined"
                    style={{fontSize:"1.8rem"}}>
                        {openMenu?"close":"menu"}
                    </span>
                    </button>
            </div>
        </nav>
    </>
  )
}

export default NavBar