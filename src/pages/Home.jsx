import React from 'react'
import Header from '../components/header'
import Language from '../components/Language'
import PopularCoins from '../components/popularCoins'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'
import { FaArrowRight } from "react-icons/fa"
import { AiOutlineSlack } from 'react-icons/ai'
import { MdKeyboardArrowRight } from 'react-icons/md'
import HomeComponent from '../components/Home-component/homeComponent'
import Currency from '../components/Currency'

const Home = () => {
  const { sidebar, openLanguage, currencyList } = useStateContext()

  return (
    <div className='relative overflow-y-scroll bg-inherit'>
        {sidebar? (
              <div className='bg-gray-200 dark:dark-sidebar h-screen fixed right-0 w-[350px]'>
                <Sidebar />
            </div>
        ) : (
            ''
        )}
         
        <Header />
      {openLanguage && <Language />}
      {currencyList && <Currency />}
         <HomeComponent />
    </div>
  )
}

export default Home