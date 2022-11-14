import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaDiscord, FaFacebook, FaInstagram, FaReddit, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GrSubtract } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../context/useStateContext'
import { getAuth } from 'firebase/auth'

const Footer = () => {
    const { itemType, setItemType } = useStateContext()
    const navigate = useNavigate()

    const handleClickItem = (item) => {

        if (itemType === "" || itemType !== item){
            setItemType(item) 
        } else if (itemType === item){
            setItemType("")
        } else {
            return
        }
    }

    const auth = getAuth();
    const user = auth.currentUser;

  return (
      <div className='px-5 lg:px-14'>
          {!user ? <div className='lg:hidden my-8'>
              <h1 className='text-2xl font-semibold'>Trade on the go with Binance</h1>
              <button className='bgcolor p-2 text-md font-semibold px-10 mt-3'>Register</button>
          </div>: ("")}
          <div className='md:flex md:flex-row md:justify-between'>
              {!user ? <div className='hidden lg:block'>
                  <h1 className='text-2xl font-semibold'>Trade on the go with Binance</h1>
                  <button className='bgcolor p-2 text-md font-semibold px-10 mt-3' onClick={() => navigate("/register")}>Register</button>
              </div> : ("")}
              <div className="my-6 md:my-0 lg:mx-4 ">
                  <div className='flex justify-between items-center'>
                      <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleClickItem("about")}> About Us</h2>

                      <div className='md:hidden'>
                          {itemType === "about" ? <GrSubtract onClick={() => setItemType("")} className="font-bold text-2xl cursor-pointer" /> : <AiOutlinePlus onClick={() => handleClickItem("about")} className="font-bold text-2xl cursor-pointer" />}
                      </div>
                  </div>
                  <ul className={`${itemType === "about" ? " text-gray-400 text-sm font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`}>
                      < li className="cursor-pointer hover:text-black font-semibold">About</ li >
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
              <div className="my-6 md:my-0 lg:mx-4 ">
                  <div className='flex justify-between items-center'>
                      <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleClickItem("products")}> Products</h2>

                      <div className='md:hidden'>
                          {itemType === "products" ? <GrSubtract onClick={() => setItemType("")} className="font-bold text-2xl cursor-pointer" /> : <AiOutlinePlus onClick={() => handleClickItem("products")} className="font-bold text-2xl cursor-pointer" />}
                      </div>
                  </div>
                  <ul className={`${itemType === "products" ? " text-gray-400 text-sm font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`}>
                      < li className="cursor-pointer hover:text-black font-semibold">Exchange</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Academy</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Binance Live</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Charity</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Card</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Labs</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">LaunchPad</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Research</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Trust Wallet</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Nft</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Notices</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Binance Pay</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Binance Gift Card</ li >
                  </ul>
              </div>
              <div className="my-6 md:my-0 lg:mx-4">
                  <div className='flex justify-between items-center'>
                      <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleClickItem("service")}> Service</h2>

                      <div className='md:hidden'>
                          {itemType === "service" ? <GrSubtract onClick={() => setItemType("")} className="font-bold text-2xl cursor-pointer" /> : <AiOutlinePlus onClick={() => handleClickItem("service")} className="font-bold text-2xl cursor-pointer" />}
                      </div>
                  </div>
                  <ul className={`${itemType === "service" ? " text-gray-400 text-sm font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`} >
                      < li className="cursor-pointer hover:text-black font-semibold">Downloads</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Desktop Application</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Crypto</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Institutional & VIP services</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">OTC Trading</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Refferal</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Affliate</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Blog</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Lisitng Application</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">P2P Merchant Application</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">P2Pro Merchant Application</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Historical Market Data</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Proof of Asset</ li >
                  </ul>
              </div>
              <div className="my-6 md:my-0 lg:mx-4">
                  <div className='flex justify-between items-center'>
                      <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleClickItem("support")}> Support</h2>

                      <div className='md:hidden'>
                          {itemType === "support" ? <GrSubtract onClick={() => setItemType("")} className="font-bold text-2xl cursor-pointer" /> : <AiOutlinePlus onClick={() => handleClickItem("support")} className="font-bold text-2xl cursor-pointer" />}
                      </div>
                  </div>
                  <ul className={`${itemType === "support" ? " text-gray-400 text-sm font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`}>
                      < li className="cursor-pointer hover:text-black font-semibold">Give US Feedback</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Support Center</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Submit a Request</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Apis</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Fees</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Trading Rules</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Binance Verify</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Law Enforcement Request</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Binance Legal(Court Orders)</ li >
                      < li className="cursor-pointer hover:text-black font-semibold ">Binance Airdrop Portal</ li >
                  </ul>
              </div>
              <div className="my-6 md:my-0 lg:mx-4">
                  <div className='flex justify-between items-center'>
                      <h2 className='text-lg font-bold text-gray-700 cursor-pointer' onClick={() => handleClickItem("learn")}> Learn</h2>

                      <div className='md:hidden'>
                          {itemType === "learn" ? <GrSubtract onClick={() => setItemType("")} className="font-bold text-2xl cursor-pointer" /> : <AiOutlinePlus onClick={() => handleClickItem("learn")} className="font-bold text-2xl cursor-pointer" />}
                      </div>
                  </div>
                  <ul className={`${itemType === "learn" ? " text-gray-400 text-sm  font-bold" : "hidden md:block text-gray-400 text-sm cursor-pointer font-bold"}`}>
                      < li className="cursor-pointer hover:text-black font-semibold">Learn & Earn</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Browse Crypto Prices</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy BNB</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy BUSD</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy  Bitcoin</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Ethereum</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Litecoin</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Ripple</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy  Bitcoin Cash</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Dogecoin</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Defi</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy SHIB</ li >
                      < li className="cursor-pointer hover:text-black font-semibold">Buy Tradable Altcoins</ li >
                  </ul>
              </div>
          </div>
          <div className="community mt-10 pb-4 border-b-2 border-gray-300">
              <h2 className='text-lg font-bold text-gray-700'>Community</h2>
              <ul className='text-gray-400 flex items-center cursor-pointer'>
                  <li className='py-2 px-2 text-2xl'><FaDiscord /></li>
                  <li className='py-2 px-2 text-2xl'><FaTelegram /></li>
                  <li className='py-2 px-2 text-2xl'><FaTiktok /></li>
                  <li className='py-2 px-2 text-2xl'><FaFacebook /></li>
                  <li className='py-4 px-2 text-2xl'><FaTwitter /></li>
                  <li className='py-4 px-2 text-2xl'><FaReddit /></li>
                  <li className='py-4 px-2 text-2xl'><FaInstagram /></li>
                  <li className='py-4 px-2 text-2xl'><FaYoutube /></li>
              </ul>
          </div>
          <h2 className='text-center my-10'>Crypto coin © 2022</h2>
      </div>
  )
}

export default Footer