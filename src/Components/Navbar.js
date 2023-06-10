import React  from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import { FiAlignRight } from "react-icons/fi";



function Navbar({toggleSidebar}) {
  return (
    <div className='navbar'>
        <div className='LeftSide'>
            <h1>MR FANCY STORE</h1>
        </div>
        <div className='RightSide'>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleSidebar} >
            <FiAlignRight />
          </button>
        </div>
    </div>
  )
}

export default Navbar