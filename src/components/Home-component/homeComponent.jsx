import React from 'react'
import { AiOutlineSlack } from 'react-icons/ai'
import { FaArrowRight } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { BsApple, BsFillPersonFill } from 'react-icons/bs'
import PopularCoins from '../popularCoins'
import FirstHomeItem from './firstHomeItem'

const HomeComponent = () => {
  return (
    <div>
          <div className='flex items-center space-x-2 p-2 bg-yellow-100 dark:bg-yellow-900 cursor-pointer text-sm sm:text-sm mb-7'>
              <AiOutlineSlack />
              <p className=''>Register now - Get up to 100 USDT in trading fee (for verified user)</p>
              <FaArrowRight className='font-bold' />
          </div>
          <FirstHomeItem />
          <div className='p-5 font-bold text-2xl '>
              <h2>Popular cryptocurrencies</h2>
              <PopularCoins />
          </div>
    </div>
  )
}

export default HomeComponent