import React from 'react'
import CategorySidebar from '../components/CategorySidebar'
import Nav from '../components/navbar/Nav'
import { Outlet } from 'react-router-dom'

function Inventory() {
  return (
    <div className='w-screen'>
      {/* <Nav/> */}
      <Outlet/>
    </div>
  )
}

export default Inventory