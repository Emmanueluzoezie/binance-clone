import React from 'react'
import { AiOutlineSlack } from 'react-icons/ai'
import { BsApple, BsFillPersonFill } from 'react-icons/bs'
import { MdKeyboardArrowRight } from 'react-icons/md'
import google from "../../data/google.png"
import binanceOne from "../../data/binance-one.png"
import binanceTwo from "../../data/binance-two.png"
import binanceThree from "../../data/binance-three.png"
import binanceFour from "../../data/binance-four.png"

const FirstHomeItem = () => {
  return (
      <div>
          <div className='w-full flex my-20'>
              <div>
                  <h1 className='px-5 font-bold text-3xl md:w-[55%]'>Search for over 1000+ cryptocurrencies</h1>
                  <div className='flex items-center space-x-1 mx-3 mt-10 cursor-pointer '>
                      <AiOutlineSlack className='text-xl ml-4' />
                      <p>Trade Bitcoin for free</p>
                      <MdKeyboardArrowRight className='text-2xl' />
                  </div>
                  <div className='mt-4 px-4'>
                      <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
                          <BsFillPersonFill />
                          <h2>Signup with Email or Phone</h2>
                      </button>
                      <div className='flex my-3 items-center w-full justify-center'>
                          <div className='flex-1 mr-2 border-b-[1px] border-white' />
                          <h2>Or continue with</h2>
                          <div className='flex-1 ml-2 border-b-[1px] border-white' />
                      </div>
                      <div className='flex items-center space-x-4'>
                          <button className='flex items-center flex-1 justify-center bg-gray-600  p-3 rounded-lg'>
                              <img src={google} className="w-4 h-4 mr-3" alt="google-logo" />
                              Google
                          </button>
                          <button className='flex items-center flex-1 justify-center bg-gray-600 p-3 rounded-lg'>
                              <BsApple className='mr-3' />
                              Apple
                          </button>
                      </div>
                  </div>
              </div>
              <div className='hidden md:flex md:w-[45%] ml-28'>
                  <div className='w-full md:flex flex-wrap justify-center'>
                      <div className='md:w-[45%] bg-white dark:bg-gray-900 rounded-lg  m-2 py-6 px-4 space-y-4'>
                          <h1 className='text-sm'>Hold & Earn</h1>
                          <img src={binanceOne} alt="" />
                      </div>
                      <div className='w-[32%] space-y-6 bg-white dark:bg-gray-900 rounded-lg m-2 p-4' >
                          <img src={binanceFour} alt="" />
                          <h1>Binance NFT</h1>
                      </div>
                      <div className='w-[45%] h-[180px] bg-white dark:bg-gray-900 rounded-lg m-2' >
                          <img src={binanceTwo} alt="" />
                      </div>
                      <div className='w-[32%] h-[180px] bg-white dark:bg-gray-900 rounded-lg m-2 p-4' >
                          <h1>Binance card</h1>
                      </div>
                  </div>
              </div>
              <div>
              </div>
          </div>
          <div className='w-full flex flex-wrap lg:justify-center px-4 mb-20'>
              <div className='lg:flex-1 w-[50%] mt-5'>
                  <h1 className='text-2xl font-bold'>$76 billion</h1>
                  <p className='text-xs sm:text-lg'>24h trading volume on Binance exchange</p>
              </div>
              <div className='lg:flex-1 w-[50%] mt-5'>
                  <h1 className='text-2xl font-bold'>350+</h1>
                  <p className='text-xs sm:text-lg'>Cryptocurrencies listed</p>
              </div>
              <div className='lg:flex-1 w-[50%] mt-5'>
                  <h1 className='text-2xl font-bold'>120 million</h1>
                  <p className='text-xs sm:text-lg'>Registered users</p>
              </div>
              <div className='lg:flex-1 w-[50%] mt-5'>
                  <h1 className='text-2xl font-bold'>{'<'}0.10%</h1>
                  <p className='text-xs sm:text-lg'>Lowest transaction fees</p>
              </div>
          </div>
          <div className='bg-white dark:bg-gray-500 p-10 rounded-3xl'>
              <div className='md:flex md:items-center bg-yellow-100 dark:bg-[#422401] py-7 px-3 rounded-3xl'>
                  <div className='flex justify-center md:w-[35%] mb-10'>
                      <img src={binanceThree} alt="" className='w-[200px]' />
                  </div>
                  <div className='md:w-[60%] space-y-4'>
                      <h1 className='font-bold text-3xl'>Become The Pumpkin King to Win 1 BTC</h1>
                      <p>Play the game and collect candy! Those who rank in the top 100 will qualify for a share of 1 BTC, 10 BNB, and 10,000 BUSD in spooktacular rewards!</p>
                      <button className='bgcolor rounded-md font-semibold p-3 w-[250px]'>Play Now</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default FirstHomeItem