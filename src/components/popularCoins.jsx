import axios from "axios"
import { useEffect, useState } from "react"
import { useStateContext } from "../context/useStateContext"
import { TopCrypto } from "./TopCoins"

const PopularCoins = () => {
  const [coins, setCoins] = useState([])
  const {currency} = useStateContext()

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
    <div className='my-10'>
      <div className='w-full flex items-center px-5 my-4'>
        <div className='flex-1'>
          <div className='flex items-center space-x-2'>
            <h1 className='text-sm md:text-lg font-semibold'>Name</h1>
          </div>
        </div>
        <div className='flex w-[50%] md:w-[40%] lg:w-[30%] justify-between space-x-16 md:space-x-4 lg:space-x-20 text-lg'>
            <h1 className='text-sm md:text-lg  font-semibold flex items-center space-x-2'>Last Price</h1>
          <h1 className='text-sm font-semibold md:text-lg '>24h Change</h1>
        </div>
        <div className='hidden md:block md:flex-1'>
          <div className='hidden md:flex justify-end md:pr-6 lg:pr-2'>
            <h1 className='text-sm font-semibold md:text-lg'>Market</h1>
          </div>
        </div>
      </div>
      {coins && coins.splice(0, 5).map(coin => (
        <TopCrypto coins={coins}
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbols={coin.symbol}
          rank={coin.rank}
          image={coin.image}
          price={coin.current_price}
          percent={coin.market_cap_change_percentage_24h}
          marketCap={coin.market_cap}
        />
      ))}
    </div>
  )
}

export default PopularCoins