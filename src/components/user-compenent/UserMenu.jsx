import React from 'react'
import { BsFillPersonFill, BsFillPersonPlusFill } from 'react-icons/bs'
import { MdSecurity, MdSettingsInputComponent } from 'react-icons/md'
import { HiIdentification } from 'react-icons/hi'
import { AiFillApi, AiFillDollarCircle } from 'react-icons/ai'
import { RiCoupon2Fill } from 'react-icons/ri'
import { GiBattery100 } from 'react-icons/gi'
import { useStateContext } from '../../context/useStateContext'
import { useNavigate } from 'react-router-dom'

const UserMenu = () => {
  const { activePage, setActivePage, } = useStateContext()
  const navigate = useNavigate()

  const handlePageComponent = (clickedItem) => {

    // clickedItem.preventDefault()

    setActivePage(clickedItem)
    navigate(`/${clickedItem}`)
  }

  return (
    <div className='flex items-center space-x-3 scroll-w-0 hide md:space-x-0 md:block px-4 md:px-0 md:bg-inherit bg-gray-800 text-gray-400 py-1 md:h-[90vh] md:w-[200px] lg:w-[250px] md:border-r-2 border-gray-300'>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "dashboard" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <BsFillPersonFill />
        <h2 onClick={() => handlePageComponent('dashboard')} className={`${activePage === "dashboard"? " border-b-2 border-yellow-500 md:border-none " : ""}`}>Dashboard</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "security" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <MdSecurity />
        <h2 onClick={() => handlePageComponent('security')} className={`${activePage === "security" ? " border-b-2 border-yellow-500 lg:border-none " : ""}`}>Security</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "identification" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <HiIdentification />
        <h2>Identification</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "payment" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <AiFillDollarCircle />
        <h2>Payment</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "referral" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <BsFillPersonPlusFill />
        <h2>Referral</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "rewardcenter" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <RiCoupon2Fill />
        <h2>Reward Center</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "taskcenter" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <GiBattery100 />
        <h2>Task Center</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "apimanagement" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <AiFillApi />
        <h2>API Management</h2>
      </div>
      <div className={`flex items-center space-x-2 text-lg md:text-sm lg:text-md md:hover:bg-gray-300 p-3 cursor-pointer whitespace-nowrap ${activePage === "settings" ? " md:border-l-4 border-yellow-500 md:bg-gray-200" : ""}`}>
        <MdSettingsInputComponent />
        <h2>Settings</h2>
      </div>
    </div>
  )
}

export default UserMenu