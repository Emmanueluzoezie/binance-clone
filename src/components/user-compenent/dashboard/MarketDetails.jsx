import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiFire } from 'react-icons/hi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useStateContext } from '../../../context/useStateContext'
import FavoriteCoin from './FavoriteCoin'
import HotsCoins from './HotsCoins'
import SpotCoins from './SpotCoins'
import userbanner from "../../../data/userbanner.png"

const MarketDetails = () => {
    
    const { currency, activeCoinDetails, setActiveCoinDetails } = useStateContext()


    return (
        <div className='my-10'>
            <div className='px-5'>
                <div className='flex items-center space-x-3'>
                    <h1 className='font-semibold text-2xl'>Markets</h1>
                    <div className='bg-gray-200 p-1 text-[18px] rounded-md'>
                        <MdOutlineKeyboardArrowRight className="cursor-pointer" />
                    </div>
                </div>
                <div className='flex items-center space-x-4 mt-10 mb-10'>
                    <button className={`rounded-md text-md font-semibold p-2 ${activeCoinDetails === "spot" ? "bg-yellow-200 text-black" : "text-gray-500"}`} onClick={() => setActiveCoinDetails("spot")}>Spot Holdings</button>
                    <button className={`text-md font-semibold rounded-md p-2 flex items-center ${activeCoinDetails === "hot" ? "bg-yellow-200 text-black" : "text-gray-500"}`} onClick={() => setActiveCoinDetails("hot")}><HiFire /> Hot</button>
                    <button className={`text-md font-semibold rounded-md p-2 ${activeCoinDetails === "favorite" ? "bg-yellow-200 text-black" : "text-gray-500"}`} onClick={() => setActiveCoinDetails("favorite")}> Favorite</button>
                </div>
                {activeCoinDetails === "spot" ? <SpotCoins /> : ""}
                {activeCoinDetails === "hot" ? <HotsCoins /> : ""}
                {activeCoinDetails === "favorite" ? <FavoriteCoin /> : ""}
            </div>
            <div className='px-5'>
                <div className='lg:hidden flex mt-10 justify-between bg-gray-200 p-3 text-xl font-semibold items-center rounded-xl'>
                    <h3 className='text-lg'>New: 0% fees in trading Bitcoin</h3>
                    <img src={userbanner} alt="banner" className='w-[100px]' />
                </div>
            </div> 
        </div>
    )
}

export default MarketDetails