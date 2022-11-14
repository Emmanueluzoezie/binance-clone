import { getAuth } from 'firebase/auth';
import React from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';
import { useStateContext } from '../context/useStateContext';

const BuyCryptoLink = () => {
    const { setOpenLanguage, setSidebar, currency, setCurrencyList, sidebarLink, setSidebarLink } = useStateContext()

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
      <div className="mt-6 md:my-0 lg:mx-4 px-5">
          <div className='flex justify-between items-center'>
              <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleSidebarLink("buycrypto")}> Buy crypto{"  "}{currency}</h2>

              <div className='md:hidden'>
                  {sidebarLink === "buycrypto" ? <MdOutlineArrowDropUp onClick={() => setSidebarLink("")} className="font-bold text-2xl cursor-pointer" /> : <MdOutlineArrowDropDown onClick={() => setSidebarLink("buycrypto")} className="font-bold text-2xl cursor-pointer" />}
              </div>
          </div>
          <ul className={`${sidebarLink === "buycrypto" ? " text-black text-md font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`}>
              < li className="cursor-pointer hover:text-black font-semibold flex justify-between items-center">
                  <h2>Pay with</h2>
                  <div>
                      <h2 onClick={handleCurrency}>{currency}</h2>
                  </div>
              </ li >
              < li className="cursor-pointer hover:text-black font-semibold">Careers</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Business Contact</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Community</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Binance Blog</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Terms</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Privacy</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Risk Warning</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Annoucements</ li >
              < li className="cursor-pointer hover:text-black font-semibold">News</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Notices</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Binance Pay</ li >
              < li className="cursor-pointer hover:text-black font-semibold">Cookie Preference</ li >
          </ul>
      </div>
  )
}

export default BuyCryptoLink