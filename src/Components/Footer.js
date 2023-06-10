import React from 'react'
import "../Styles/Footer.css"
import { FiFacebook } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

function Footer() {
  return (
    <div className='footer'>
        <div className='social'>
            <FiFacebook/>
            <FiGithub/>
            <FiLinkedin/>
            <FiTwitter/>
        </div>
        <div className='text'>
            <p>&copy; MrFancy.com 2023</p>
        </div>
    </div>
  )
}

export default Footer