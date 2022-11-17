import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../../context/useStateContext'

const SpotCoins = () => {
  const [coins, setCoins] = useState([])

  const { currency, symbol, activeCoinDetails, setActiveCoinDetails } = useStateContext()

  function getColor(change) {
    if (change < 0) {
      return "RED"
    } else if (change > 0) {
      return "GREEN"
    }
    return "green"
  }

  const totalOne = Number(Math.random() * (20 - 3) + 3).toFixed(6);
  const totalThree = Number(Math.random() * (20 - 3) + 3).toFixed(6);

  function getMarketStatus(change) {
    if (change < 999999) {
      return "M"
    } else if (change > 999999999) {
      return "B"
    }
    return "green"
  }

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(function (response) {
        setCoins(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [currency])

  return (
    <div>
      <h2>SpotCoins</h2>
      <div className='w-full hidden  md:flex items-center my-4'>
        <div className='w-full flex items-center space-x-4 px-3'>
          <h1 className='flex-1'>Name</h1>
          <h1 className='w-[12%] lg:w-[16%]'>Amount</h1>
          <h1 className='w-[12%] lg:w-[16%]'>Price</h1>
          <h1 className='w-[12%] lg:w-[16%]'>24 hour change</h1>
          <div className='w-[80px] '/>
        </div>
      </div>
      {coins && coins.splice(0, 10).map(coin => (
         <div>
          <div className='md:hidden my-10 space-y-2'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-2 text-sm '>
                <img src={coin.image} alt="" className="rounded-full w-8 h-8 mr-2" />
                <h2 className='font-semibold'>{coin.name}</h2>
                <p className='uppercase text-gray-500'>{coin.symbol}</p>
              </div>
              <h2 className='text-[15px]'>{symbol}{Number(coin.current_price).toFixed(2)}</h2>
            </div>
            <div className='flex justify-between'>
              <h4 className='text-gray-500 text-[15px]'>Total</h4>
              <h3 className='text-sm text-[13px]'>{Number(Math.random() * (5 - 0) + 0).toFixed(6)}</h3>
            </div>
            <div className='flex justify-between'>
              <h4 className='text-gray-500 text-[15px]'>24H Change</h4>
              <h3 className='text-sm text-[13px]' style={{ color: getColor(coin.market_cap_change_percentage_24h) }}>{Number(coin.market_cap_change_percentage_24h).toFixed(2)}</h3>
            </div>
            <div></div>
          </div>
          <div className=' w-full hidden md:flex items-center space-x-4  p-3 my-2 cursor-pointer hover:bg-gray-200'>
            <div className='flex-1'>
              <div className='flex items-center space-x-2 text-sm '>
              <img src={coin.image} alt="" className="rounded-full w-6 h-6 mr-2" />
              <h2 className='font-semibold'>{coin.name}</h2>
              <p className='uppercase text-gray-500'>{coin.symbol}</p>
            </div>
            </div>
            <h1 className='w-[12%] lg:w-[16%]'>{Number(Math.random() * (20 - 3) + 3).toFixed(2)}</h1>
            <h1 className='w-[12%] lg:w-[16%]'>{symbol}{Number(coin.current_price).toFixed(2)}</h1>
            <h1 className={`w-[12%] lg:w-[16%] text-center`} style={{ color: getColor(coin.market_cap_change_percentage_24h)}}>{Number(coin.market_cap_change_percentage_24h).toFixed(2)}</h1>
            <h1 className='text-yellow-600 text-center w-[80px] '>Trade</h1>
          </div>
         </div>
      ))}
      </div>
  )
}

export default SpotCoins