import React from 'react'
import { BiSearch } from 'react-icons/bi'
import AboutUser from '../dashboard/aboutUser'
import AccountInfo from './accountInfo'
import MarketDetails from './MarketDetails'
import userbanner from "../../../data/userbanner.png"
import Service from './service'

const DashBoard = () => {
  return (
    <div>
      <AboutUser />
      <AccountInfo />
      <div className='lg:flex'>
        <div className='flex-1'><MarketDetails /></div>
        <div className='lg:w-[40%]'><Service /></div>
      </div>
    </div>
  )
}

export default DashBoard

 