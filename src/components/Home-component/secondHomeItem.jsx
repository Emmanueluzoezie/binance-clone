import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import mobile from "../../data/mobile.png"
import cardsvg from "../../data/cardsvg.png"
import person from "../../data/personsvg.png"
import circle from "../../data/circle.png"
import secondsvg from "../../data/secondsvg.png"
import firstsvg from "../../data/firstsvg.png"
import fifthhsvg from "../../data/fifthhsvg.png"
import foursvg from "../../data/foursvg.png"

const SecondHomeItem = () => {
  return (
    <div className='px-5'>
          <div className='flex items-center space-x-1  my-10 cursor-pointer hover:color'>
              <p>Trade Bitcoin for free</p>
              <MdKeyboardArrowRight className='text-2xl' />
          </div>
          <h1 className=' font-medium text-xl'>Sign up now to build your own portfolio for free!</h1>
          <button className='bgcolor w-full my-4 text-xl py-3 rounded-lg dark:text-black lg:mb-10'>Get Started</button>
          <div className='my-10 lg:flex relative'>
              <div className='flex justify-center w-ful lg:w-[40%] lg:absolute lg:right-0' >
                  <div className='flex justify-center w-full '>
                  <img src={mobile} alt='mobile' className='w-52 md:w-64 lg:w-72 mb-10 lg:mb-0' />
                  </div>
              </div>
              <div className='md:w-[60%]'>
                  <h1 className='font-semibold text-2xl lg:text-5xl'>Build your crypto portfolio</h1>
                  <p className='text-gray-500 lg:text-xl lg:mt-6'>Start your first trade with these easy steps.</p>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={cardsvg} alt='' className='w-10 h-14 my-4'/>
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Verify your identity</h2>
                          <p className='text-md text-gray-700'>Complete the identity verification process to secure your account and transactions.</p>
                      </div>
                  </div>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={person} alt='' className='w-10 my-4' />
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Fund your account</h2>
                          <p className='text-md text-gray-700'>Add funds to your crypto account to start trading crypto. You can add funds with a variety of payment methods.</p>
                      </div>
                  </div>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={circle} alt='' className='w-10 my-4' />
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Start trading</h2>
                          <p className='text-md text-gray-700'>You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</p>
                      </div>
                  </div>
              </div>
          </div>
          <button className='bgcolor w-full my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20'>Get Started</button>
          <h1 className=' font-medium lg:font-bold text-xl lg:text-4xl lg:ml-10 lg:mb-10 md:text-4xl'>Explore endless possibilities with Binance</h1>
          <div className='lg:flex lg:justify-center lg:px-10'>
              <div className='bg-gray-100 dark:bg-black rounded-xl m-6 lg:w-[30%] p-10 lg:p-6  my-20 lg:my-0'>
                  <img src={secondsvg} alt='' className='w-full my-4' />
                  <div className='space-y-2'>
                      <h2 className='font-semibold text-xl'>Dive into world of NFTs</h2>
                      <p className="text-sm text-gray-500">Open rare Mystery Boxes, explore IGOs, Fan Tokens, and more with Binane NFT.</p>
                      <p className='color cursor-pointer'>Learn more</p>
                  </div>
              </div>
              <div className='bg-gray-100 dark:bg-black rounded-xl m-6 lg:w-[30%] p-10 lg:p-6 my-20 lg:my-0'>
                  <div className=' space-y-2 '>
                      <h2 className='font-semibold text-xl'>Grow your business witth Binance Pay</h2>
                      <p className="text-sm text-gray-500">Reach more customers as you pay and get paid in crypto withh our borderless payment technology on binance Pay & Binance Marketplace.</p>
                      <p className='color cursor-pointer'>Learn more</p>
                  </div>
                  <img src={firstsvg} alt='' className='w-full my-4' />
              </div>
              <div className='bg-gray-100 dark:bg-black rounded-xl m-6 lg:w-[30%] p-10 lg:p-6 my-20 lg:my-0'>
                  <img src={fifthhsvg} alt='' className='w-full my-4' />
                  <div className='ml-20 space-y-2 lg:ml-0 '>
                      <h2 className='font-semibold text-xl'>Binance Earn</h2>
                      <p className="text-sm text-gray-500">Hold your crypto funds and start earning.</p>
                      <p className='color cursor-pointer'>Learn more</p>
                  </div>
              </div>
          </div>
          <button className='bgcolor w-full lg:w-[200px] my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20 lg:ml-20 lg:mt-10'>Explore Now</button>
          <div className='mt-10 lg:mt-0 lg:flex relative'>
              <div className='flex justify-center w-ful lg:w-[50%] lg:absolute lg:right-0' >
                  <div className='flex justify-center w-full lg:h-[400px] lg:pl-20'>
                      <img src={fifthhsvg} alt='mobile' className='w-inherit h-inherit mb-10 lg:mb-0' />
                  </div>
              </div>
              <div className='md:w-[50%]'>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={cardsvg} alt='' className='w-10 h-14 my-4' />
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Secure Asset Fund for Users (SAFU)</h2>
                          <p className='text-md text-gray-700'>Binance stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                      </div>
                  </div>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={person} alt='' className='w-10 my-4' />
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Personalised Access Control</h2>
                          <p className='text-md text-gray-700'>Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind..</p>
                      </div>
                  </div>
                  <div className='my-10 lg:flex lg:items-center lg:space-x-10'>
                      <img src={circle} alt='' className='w-10 my-4' />
                      <div>
                          <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Advanced Data Encryption</h2>
                          <p className='text-md text-gray-700'>Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                      </div>
                  </div>
              </div>
          </div>
          <button className='bgcolor w-full lg:w-[200px] my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20'>Start Now</button>
          <div className='lg:flex lg:items-center lg:justify-between'>
              <div>
                  <h1 className=' font-medium lg:font-bold text-xl lg:text-4xl md:text-4xl'>Trade on the go. Anywhere, anytime.</h1>
                  <p className='text-gray-500 lg:text-xl lg:mt-6'>Stay in the know with our app and desktop client.</p>
              </div>
              <div className='flex items-center space-x-1  my-10 cursor-pointer hover:color'>
                  <p>Trade Bitcoin for free</p>
                  <MdKeyboardArrowRight className='text-2xl' />
              </div>
          </div>
    </div>
  )
}

export default SecondHomeItem