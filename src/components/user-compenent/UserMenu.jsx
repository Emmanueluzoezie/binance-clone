import React from 'react'
import { BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs'
import { MdSecurity, MdSettingsInputComponent } from 'react-icons/md'
import { HiIdentification } from 'react-icons/hi'
import { AiFillApi, AiFillDollarCircle } from 'react-icons/ai'
import { RiCoupon2Fill } from 'react-icons/ri'
import { GiBattery100 } from 'react-icons/gi'

const UserMenu = () => {
  return (
    <div className='flex items-center space-x-3 scroll-w-0 hide lg:space-x-0 lg:block px-4 lg:px-0 lg:bg-inherit bg-gray-800 text-gray-400 py-1 lg:h-[90vh] lg:w-[250px] lg:border-r-2 border-gray-200'>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <BsFillPersonFill />
        <h2>Dashboard</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <MdSecurity />
        <h2>Security</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <HiIdentification />
        <h2>Identification</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <AiFillDollarCircle />
        <h2>Payment</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <BsFillPersonPlusFill />
        <h2>Referral</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <RiCoupon2Fill />
        <h2>Reward Center</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <GiBattery100 />
        <h2>Task Center</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <AiFillApi />
        <h2>API Management</h2>
      </div>
      <div className='flex items-center space-x-2 text-lg lg:text-md lg:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap'>
        <MdSettingsInputComponent />
        <h2>Settings</h2>
      </div>
    </div>
  )
}

export default UserMenu