import React from 'react'
import { BiHide, BiSearch, BiShow } from 'react-icons/bi'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useStateContext } from '../../context/useStateContext'
import investcircle from "../../data/investcircle.png"
import userbanner from "../../data/userbanner.png"

const AccountInfo = () => {
    const { showBalance, setShowBalance, symbol } = useStateContext()

  return (
    <div className='mb-10 lg:my-10 relative lg:flex flex-row-reverse'>
          <div className='px-5  my-8 lg:my-0 lg:w-[40%]'>
              <h1 className='text-2xl font-semibold mb-2'>Explore</h1>
              <div className='flex items-center space-x-2 p-2 bg-white border-[1px] border-gray-600 hover:border-yellow-400'>
                  <BiSearch />
                  <input className='outline-none flex-1' type="text" placeholder='Coin, Function, Announcement' />
              </div>
              <div className='hidden lg:flex mt-10 justify-between bg-gray-200 px-3 text-xl font-bold items-center '>
                <h3 className='mr-20'>New: 0% fees in trading Bitcoin</h3>
                  <img src={userbanner} alt="banner" className='w-[100px]'/>
              </div>
          </div>
          <div className='lg:flex-1'>
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
              <div className='px-5 my-10 md:flex space-x-6'>
                  <div className='flex justify-center md:w-[30%]'>
                      <img src={investcircle} alt="" className='md:w-[150px] md:h-[150px]'/>  
                  </div>
                 <div className='mt-10 md:mt-0 flex-1 lg:w-[60%]'>
                      <div className='lg:flex overflow-scroll lg:py-4'>
                          <div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-blue-700' />
                                      <h2>Fiat and Spot</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>5.23% = {symbol}30.39 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-green-500' />
                                      <h2>Funding</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.23% = {symbol}7.39 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-pink-400' />
                                      <h2>Cross Margin</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.00% = {symbol}0.000000 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-gray-500' />
                                      <h2>Isolated Margin</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.00% = {symbol}0.000000  <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                          </div>
                          <div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-blue-400' />
                                      <h2>USDⓈ-M Futures</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.00% = {symbol}0.000000 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-yellow-400' />
                                      <h2>COIN-M Future</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.00% = {symbol}0.000000 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-yellow-400' />
                                      <h2>Earn</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>67.23% = {symbol}300.39 <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                              <div className='flex justify-between items-center text-xs hover:bg-gray-200 p-2 px-2 rounded-md whitespace-nowrap lg:space-x-4'>
                                  <div className='flex items-center space-x-1'>
                                      <div className='w-2 h-2 bg-yellow-400' />
                                      <h2>Options</h2>
                                  </div>
                                  <h2 className='flex items-center text-gray-500 '>0.00% = {symbol}0.000000  <MdOutlineKeyboardArrowRight className="ml-3" /></h2>
                              </div>
                          </div>
                      </div>
                 </div>
              </div>
          </div>
    </div>
  )
}

export default AccountInfo