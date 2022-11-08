import React from 'react'
import { useStateContext } from '../context/useStateContext'


export const TopCrypto = ({ id, name, symbols, image, price, percent, marketCap }) => {
    const { symbol } = useStateContext()

    const marketCaps = String(marketCap).slice(0, 4);
    const percents = Number(percent).toFixed(2)

    function getStatusText(change) {
        if (change < 0) {
            return "RED"
        } else if (change > 0) {
            return "GREEN"
        }
        return "green"
    }

    function getMarketStatus(change) {
        if (change < 999999) {
            return "M"
        } else if (change > 999999999) {
            return "B"
        }
        return "green"
    }

    return (
        <div className='w-full flex items-center px-5 my-4'>
            <div className='flex-1'>
                <div className='flex items-center space-x-2'>
                    <img src={image} alt={name} className="rounded-full md:w-10 md:h-10 w-8 h-8 mr-2" />
                    <h1 className='text-sm md:text-lg font-semibold'>{name}</h1>
                    <h1 className='text-sm md:text-lg  uppercase font-light'>{symbols}</h1>
                </div>
            </div>
            <div className='flex w-[50%] md:w-[40%] lg:w-[30%] justify-between space-x-16 md:space-x-28 lg:space-x-20 text-lg'>
                <div className='text-sm md:text-lg  font-semibold flex items-center space-x-1'>
                    <h1 >{symbol}</h1>
                    <h1>{price}</h1>
                </div>
                <h1 className='text-sm font-semibold md:text-lg ' style={{ color: getStatusText(percents) }}>{percents}</h1>
            </div>
            <div className='hidden md:block md:flex-1'>
                <div className='hidden md:flex justify-end md:pr-2 lg:pr-4 space-x-1'>
                    <h1 className='text-sm font-semibold md:text-lg'>{marketCaps}</h1>
                    <h1 className='text-sm font-semibold md:text-lg'>{getMarketStatus(marketCap)}</h1>
                </div>
            </div>
        </div>
    )
}