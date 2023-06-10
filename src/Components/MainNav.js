import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from "./Sidebar"

function MainNav() {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

  return (
    <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
    </div>
  )
}

export default MainNav