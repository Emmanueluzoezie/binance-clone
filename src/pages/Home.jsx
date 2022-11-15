import React from 'react'
import Currency from '../components/Currency'
import Header from '../components/header'
import HomeComponent from '../components/Home-component/homeComponent'
import Language from '../components/Language'
import Sidebar from '../components/sidebar'
import { useStateContext } from '../context/useStateContext'

const Home = () => {
  const { sidebar, openLanguage, currencyList } = useStateContext()

  return (
    <div className='relative overflow-y-scroll overflow-hidden bg-inherit'>
      {sidebar ? (
        <div className='bg-white dark:dark-sidebar h-screen fixed right-0 w-[350px] overflow-scroll pb-10'>
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