import React from 'react'
import { useStateContext } from '../../context/useStateContext'
import Footer from '../Footer'
import DashBoard from './dashBoard'
import UserMenu from './UserMenu'

const UserHomeComponent = () => {
  const { activePage, setActivePage } = useStateContext()

  return (
    <div className='md:flex'>
      <UserMenu />
      <div className='overflow-y-scroll md:h-[88vh]'> 
        {/* <h1>welcome</h1> */}
        {activePage === "dashboard" && <DashBoard />}
        <Footer />
      </div>
    </div>
  )
}

export default UserHomeComponent