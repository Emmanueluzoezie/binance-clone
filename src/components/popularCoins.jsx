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
      <div className='w-full flex items-center px-5 mb-4'>
        <h1 className='flex-1 text-sm md:text-xl pl-2'>Name</h1>
        <div className='flex space-x-16 md:space-x-28 '>
          <h1 className='text-sm md:text-xl '>Last Price</h1>
          <h1 className='text-sm md:text-xl '>24h Change</h1>
        </div>
        <div className='hidden md:block md:flex-1'>
          <div className='hidden md:flex justify-end md:pr-20 lg:pr-28'>
            <h1 className=''>market</h1>
          </div>
        </div>
        {/* <h1>Name</h1> */}
      </div>
      {coins && coins.splice(0, 5).map(coin => (
        <TopCrypto coins={coins}
          key={coin.id}
          id={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          rank={coin.rank}
          image={coin.image}
          price={coin.current_price}
          percent={coin.market_cap_change_percentage_24h}
        // price_change_percentage_24h
        />
      ))}
    </div>
  )
}

export default PopularCoins