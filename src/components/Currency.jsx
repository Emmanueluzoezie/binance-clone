import React from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useStateContext } from '../context/useStateContext'
import { currencyLink } from '../data/data'

const Currency = () => {
    const { setCurrencyList, setCurrency  } = useStateContext()

    const handleCurrency = (item) => {
        setCurrency(item)
        setCurrencyList(false)
    }

  return (
      <div className='absolute top-14 w-full p-10'>
          <div className='bg-white relative pt-10 pb-6 px-2'>
              <div className='absolute top-1 right-2 text-4xl cursor-pointer'>
                  <GrFormClose className='dark:text-white' onClick={() => setCurrencyList(false)} />
              </div>
              <div className='flex justify-center'>
                  <div className='bg-white h-[400px] text-center md:flex justify-center flex-wrap overflow-y-scroll py-4'>{currencyLink.map((item, index) => (
                      <div key={index} className='my-2 font-bold text-xl cursor-pointer text-gray-700 hover:text-black w-[300px] mx-2' onClick={() => handleCurrency(item)}>{item}</div>
                  ))}</div>
              </div>
          </div>
      </div>
  )
}

export default Currency