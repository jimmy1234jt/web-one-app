import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Sidebar.css"

function Sidebar({isOpen}) {
  return (
    <aside style={{display: isOpen ? 'block' : 'none'}}>
      <div className='sidebar'>
        <div className='sideMenu'>
          <div className='sideItems'>
            <input 
              type='search'
              placeholder='Search here'
            />
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar