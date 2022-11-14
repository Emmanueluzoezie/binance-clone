import React from 'react'
import Footer from '../Footer'
import UserMenu from './UserMenu'

const UserHomeComponent = () => {
  return (
    <div className='lg:flex'>
      <UserMenu />
      <div className='overflow-y-scroll lg:h-[90vh]'> 
        <h1>welcome</h1>
        <Footer />
        <Footer />
      </div>
    </div>
  )
}

export default UserHomeComponent