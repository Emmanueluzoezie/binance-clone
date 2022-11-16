import React from 'react'
import { BiHide, BiSearch, BiShow } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useStateContext } from '../../context/useStateContext'
import investcircle from "../../data/investcircle.png"

const AccountInfo = () => {
    const { showBalance, setShowBalance, symbol } = useStateContext()

  return (
    <div className='mb-10 '>
          <div className='px-5  my-8'>
              <h1 className='text-2xl font-semibold mb-2'>Explore</h1>
              <div className='flex items-center space-x-2 p-2 bg-white border-[1px] border-yellow-400 '>
                  <BiSearch />
                  <input className='outline-none' type="text" placeholder='Coin, Function, Announcement' />
              </div>
          </div>
          <div>
              <div className='md:flex items-center px-5'>
                  <div className='flex items-center space-x-3 md:space-x-7 text-2xl font-bold mb-4 mr-6'>
                      <h2>Estimated Balance</h2>
                      {showBalance ? <div className='bg-gray-200 p-1 text-[18px] rounded-md'>
                          <BiShow onClick={() => setShowBalance(false)} className="cursor-pointer" />
                      </div> : <div className='bg-gray-200 p-1 text-[18px] rounded-md'>
                          <BiHide onClick={() => setShowBalance(true)} className="cursor-pointer" />
                      </div>}
                  </div>
                  <div className='md:hidden'>
                      {showBalance ? <div className=''>
                          <div className='font-bold text-xl w-fit border-b-[2px] border-black  border-dashed'>
                              <h2 className=''>0.134334562 <span>BTC</span></h2>
                          </div>
                          <div className='flex mt-2 text-[16px] font-semibold text-gray-600 pl-4 '>
                              <h4>=</h4>
                              <h2 className='ml-2'>{symbol}</h2>
                              <h2>2,400.99</h2>
                          </div>
                      </div> : <h2 className="font-bold text-xl">***Balance hidden***</h2>}
                  </div>
                  <div className='flex items-center space-x-4 font-semibold w-full w-inherit mt-6 md:mt-0'>
                      <button className='flex-1 md:flex-0 py-2 md:py-0 md:text-sm bgcolor rounded-md'>Buy Crypto</button>
                      <button className='flex-1 md:flex-0 py-2 md:py-0 md:text-sm bg-gray-200 rounded-md'>Withdraw</button>
                      <button className='flex-1 md:flex-0 py-2 md:py-0 md:text-sm bg-gray-200 rounded-md'>Deposit</button>
                  </div>
              </div>
              <div className='hidden md:block px-5'>
                  {showBalance ? <div className='md:flex'>
                      <div className='font-bold text-xl w-fit border-b-[2px] border-black  border-dashed'>
                          <h2 className=''>0.134334562 <span>BTC</span></h2>
                      </div>
                      <div className='flex mt-2 text-[16px] font-semibold text-gray-600 pl-4 '>
                          <h4>=</h4>
                          <h2 className='ml-2'>{symbol}</h2>
                          <h2>2,400.99</h2>
                      </div>
                  </div> : <h2 className="font-bold text-xl">***Balance hidden***</h2>}
              </div>
              <div className='px-5 mt-10'>
                  <div className='flex justify-center'>
                      <img src={investcircle} alt="" className='md:w-[150px]'/>  
                  </div>
                 <div className='mt-10'>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-green-500' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                      <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                          <div className='flex items-center space-x-1'>
                              <div className='w-2 h-2 bg-blue-700' />
                              <h2>Fiat and Spot</h2>
                          </div>
                          <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight /></h2>
                      </div>
                 </div>
              </div>
          </div>
    </div>
  )
}

export default AccountInfo