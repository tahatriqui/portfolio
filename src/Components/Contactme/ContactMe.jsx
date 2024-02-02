import React from 'react'
import "./ContactMe.css"
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'


const ContactMe = () => {
  return (
    <section id='contactme' className='contact-container'>
        <h5>Contact me</h5>

        <div className='contact-content'>
            <div style={{flex:"1"}}>
                <ContactInfoCard
                iconUrl={'ContactInfo/mail.png'}
                text={"taha.triqui.02@gmail.com"}
                />
                <ContactInfoCard
               iconUrl ={'ContactInfo/git.png'}
               text ={"https://github.com/tahatriqui"}
                />
            </div>
            <div style={{flex:"1"}}>
                <ContactInfoCard
               iconUrl ={'ContactInfo/in.png'}
               text ={"https://www.linkedin.com/in/taha-triqui-1702a7282/"}
                />
            </div>
        </div>
    </section>
  )
}

export default ContactMe