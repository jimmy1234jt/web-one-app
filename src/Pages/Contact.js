import React from 'react'
import "../Styles/Contact.css"
import ContactImg from "../Assets/contact.jpg"

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'>
            <img src={ContactImg} alt='' />
        </div>
        <div className='rightSide'>
            <h1> Contact Us </h1>
            <form id='contact-form' method='POST' >
                <div className='fullNames'>
                    <div className='First'>
                    <label htmlFor='firstName' > First Name </label>
                    <input id='firstName' placeholder='First Name' type='text' required/>
                    </div>
                    <div className='Last'>
                    <label htmlFor='lastName' > Last Name </label>
                    <input id='lastName' placeholder='Last Name' type='text' required/>
                    </div>
                </div>
                <div className='email'>
                    <label htmlFor='email'> Email Address </label>
                    <input id='email' placeholder='Email Address' type='email' required/>
                </div>
                <div className='message'>
                    <label htmlFor='message'> Message </label>
                    <textarea id='message' rows="6" placeholder='Enter Message' required></textarea>
                </div>
                <div className='btn'>
                <button type='submit'> Send </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact