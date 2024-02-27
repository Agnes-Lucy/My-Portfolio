import React from 'react'
import '../Portfolio.css'
import Twitter from '../assets/twitter.png'
import Instagram from '../assets/Instagram.png'
import Linkedin from '../assets/Linkedin.png'
import Github from '../assets/github.png'
const ContactMe = () => {
  return (
    <>
    <div className='Contact' >
      <div>
        <h2>Contact</h2>
        <p>Reach me via email or social platform </p>
            <p>udohlucee@yahoo.com</p>
      </div>
        <span className='Social-media'>
            <a href='https://twitter.com/lucinda_lucee?t=l_je-FypVFekYrWfbLaUjw&s=08'><img src={Twitter} alt="Twitter" className='SM-icon'/></a>
            <a href='https://www.instagram.com/mzluciee/'><img src={Instagram} alt="Instagram" className='SM-icon' /></a>
            <a href="https://www.linkedin.com/in/agnes-udoh-075626189"><img src={Linkedin} alt="Github" className='SM-icon'/></a>
        </span>
    </div>    
    </>
  )
}

export default ContactMe
