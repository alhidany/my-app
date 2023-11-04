import React from 'react'
import './footer.css';
import gpt3logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3logo} alt="logo" />
          <p>copy write by A.N Powerd by Eng.Abdullah Nassar</p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4>Links</h4>
          <p>overons</p>
          <p>Social Media</p>
          <p>counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links-div'>
          <h4>Get in Touch</h4>
          <p>press my Email</p>
          <p>771969804</p>
          <p>Abdullahnassarwork@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>2023 GPT3 All right</p>
      </div>
    </div>
  )
}

export default Footer