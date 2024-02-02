import React from 'react'
import "./Footer.css"

const Footer = () => {
    const d = new Date()
  return (
    <div className='footer'>
      © {d.getFullYear()} Taha triqui
    </div>
  )
}

export default Footer
