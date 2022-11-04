import React from 'react'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'

const Market = () => {
    const { sidebar } = useStateContext()

  return (
    <div>
          {sidebar ? (
              <div className='bg-gray-200 dark:dark-sidebar h-screen fixed right-0 w-[350px]'>
                  <Sidebar />
              </div>
          ) : (
              ''
          )}

          <Header />
        Market
    </div>
  )
}

export default Market