import React from 'react'
import { BiSearch } from 'react-icons/bi'
import AboutUser from '../dashboard/aboutUser'
import AccountInfo from './accountInfo'
import MarketDetails from './MarketDetails'
import userbanner from "../../../data/userbanner.png"

const DashBoard = () => {
  return (
    <div>
        <AboutUser />
        <AccountInfo />
        <MarketDetails />
        <div className='px-5'>
        <div className='lg:hidden flex mt-10 justify-between bg-gray-200 p-3 text-xl font-semibold items-center rounded-xl'>
          <h3 className='text-lg'>New: 0% fees in trading Bitcoin</h3>
          <img src={userbanner} alt="banner" className='w-[100px]' />
        </div>
        </div>
          <h1>DashBoard</h1>
    </div>
  )
}

export default DashBoard