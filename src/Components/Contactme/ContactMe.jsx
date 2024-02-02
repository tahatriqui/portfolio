import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import github from '../../utils/ContactInfo/git.png'
import linkdin from '../../utils/ContactInfo/in.png'
import mail from '../../utils/ContactInfo/mail.png'


const ContactMe = () => {
  return (
    <section id='contactme' className='contact-container'>
        <h5>Contact me</h5>

        <div className='contact-content'>
            <div style={{flex:"1"}}>
                <ContactInfoCard
                iconUrl={mail}
                text={"taha.triqui.02@gmail.com"}
                />
                <ContactInfoCard
               iconUrl ={github}
               text ={"https://github.com/tahatriqui"}
                />
            </div>
            <div style={{flex:"1"}}>
                <ContactInfoCard
               iconUrl ={linkdin}
               text ={"https://www.linkedin.com/in/taha-triqui-1702a7282/"}
                />
            </div>
        </div>
    </section>
  )
}

export default ContactMe