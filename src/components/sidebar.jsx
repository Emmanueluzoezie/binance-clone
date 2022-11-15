import React from 'react'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../context/useStateContext'
import { MdFavorite, MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md"
import { TbWorld } from 'react-icons/tb'
import { GoGraph } from 'react-icons/go'
import ThemeMode from './themeMode'
import Theme from './sidebaritem/Theme'
import { useNavigate } from 'react-router-dom'
import { GrSubtract } from 'react-icons/gr'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import BuyCryptoLink from './BuyCryptoLink'

const Sidebar = () => {
  const { setOpenLanguage, language, setSidebar, symbol, currency, setCurrencyList, sidebarLink, setSidebarLink } = useStateContext()
    const [colorTheme, setTheme] = ThemeMode();
    const navigate = useNavigate()

    const handleLanguage = () => {
        setSidebar(false)
        setOpenLanguage(true)
    }

    const handleSidebarLink = (item) => {

      if (sidebarLink === "" || sidebarLink !== item) {
          setSidebarLink(item)
        } else if (sidebarLink === item) {
        setSidebarLink("")
        } else {
          return
        }
    }

    const handleCurrency = () => {
      setSidebar(false)
      setCurrencyList(true)
    }

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className='py-3'>
      <div className='flex justify-end mr-4'>
        <AiFillCloseCircle onClick={() => setSidebar(false)} className="cursor-pointer text-4xl dark:text-white"/>
      </div>
      {user?("") : (
        <div>
          <div className='flex justify-center font-bold text-xl hover:color'>
            <button className='' onClick={() => navigate('/sign-in')}>Login</button>
          </div>
          <div className='flex justify-center font-bold b'>
            <button className='bgcolor w-full rounded-md text-xl p-2 mt-4 mx-4' onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      )}
  
      <div className='mt-6'>
          <BuyCryptoLink />
            <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
              <GoGraph  className='text-xl text-gray-600'/>
              <p className='ml-2'>Market</p>
            </div>
            <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/favorite")}>
              <MdFavorite className='text-xl text-gray-600' />
              <p className='ml-2'>Favorite coins</p>
            </div>
        <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
          <GoGraph  className='text-xl text-gray-600'/>
          <p className='ml-2'>Trade</p>
        </div>
        <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
          <GoGraph  className='text-xl text-gray-600'/>
          <p className='ml-2'>Deriavatives</p>
        </div>
        <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
          <GoGraph  className='text-xl text-gray-600'/>
          <p className='ml-2'>Earn</p>
        </div>
        <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
          <GoGraph />
          <p className='ml-2'>Fiance</p>
        </div>
        <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={() => navigate("/market")}>
          <GoGraph  className='text-xl text-gray-600'/>
          <p className='ml-2'>NFT</p>
        </div>
            <Theme />
            <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={handleLanguage}>
              <TbWorld  className='text-xl text-gray-600'/>
              <p className='ml-2'>{language}</p>
            </div>
            <div className='text-md icon-color cursor-pointer hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 flex items-center' onClick={handleCurrency}>
                  <div className='w-6 h-6 bg-white flex justify-center items-center text-black rounded-full'>{symbol}</div>
                  <p className='ml-4'>{currency}</p>
                </div>
            </div>
    </div>
  )
}

export default Sidebar

  // < li > Trade </ >
  //           <li></li>
  //           <li></li>
  //           <li>Fiance</li>
  //           <li>NFT <span className="bg-yellow-400 rounded-md text-center p-1 ">New</span></li>
  //           <li>Institution Wallet</li>
  //           <li>Orders</li>
  //           <li><FaBell /></li>