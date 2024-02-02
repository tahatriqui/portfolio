import React from 'react'
import "./ContactFomr.css"

const ContactFomr = () => {
  return (
    <div className='contact-form-content'>
        <form method='post' action='error'>
            <div className='name-container'>
                <input type="text" name='firename' placeholder='First name'  />
                <input type="text" name='lastname' placeholder='Last Name' />
            </div>
            <input type='text' name='email' placeholder='Email'/>
            <textarea type="text" name='message' placeholder='message' rows={3}/>
            <button>SEND</button>  
        </form>
    </div>
  )
}

export default ContactFomr