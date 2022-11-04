import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'
import { useStateContext } from '../context/useStateContext'
import { languageLinks } from '../data/data'

const Language = () => {
    const {setOpenLanguage, language, setLanguage, setSidebar} = useStateContext()

    const handleLanguage = (item) => {
        setLanguage(item)
        setOpenLanguage(false)
    }

  return (
      <div className='absolute top-14 w-full p-10'>
          <div className='bg-white relative pt-10 pb-6 px-2'>
              <div className='absolute top-1 right-2 text-4xl cursor-pointer'>
                  <GrFormClose className='dark:text-white' onClick={() => setOpenLanguage(false)} />
              </div>
              <div className='flex justify-center'>
                  <div className='bg-white h-[400px] text-center md:flex justify-center flex-wrap overflow-y-scroll py-4'>{languageLinks.map((item, index) => (
                      <div key={index} className='my-2 font-bold text-xl cursor-pointer text-gray-700 hover:text-black w-[300px] mx-2' onClick={() => handleLanguage(item)}>{item}</div>
                  ))}</div>
              </div>
          </div>
      </div>
  )
}

export default Language