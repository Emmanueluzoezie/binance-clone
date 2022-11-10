import React from 'react'
import { MdApi, MdKeyboardArrowRight } from 'react-icons/md'
import mobile from "../../data/mobile.png"
import cardsvg from "../../data/cardsvg.png"
import person from "../../data/personsvg.png"
import circle from "../../data/circle.png"
import secondsvg from "../../data/secondsvg.png"
import firstsvg from "../../data/firstsvg.png"
import fifthhsvg from "../../data/fifthhsvg.png"
import scan from "../../data/scan.png"
import desktop from "../../data/desktop.png"
import halfmobil from "../../data/halfmobil.png"
import faqone from "../../data/faqone.png"
import faqtwo from "../../data/faqtwo.png"
import faqthree from "../../data/faqthree.png"
import { AiFillApple, AiFillCloseCircle } from 'react-icons/ai'
import { BsWindows } from 'react-icons/bs'
import { FaAndroid, FaGooglePlay, FaLinux } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const SecondHomeItem = () => {
    const navigate = useNavigate()

  return (
    <div className=''>
          <div className='flex items-center space-x-1  my-10 cursor-pointer hover:color px-5'>
              <p>Trade Bitcoin for free</p>
              <MdKeyboardArrowRight className='text-2xl' />
          </div>
          <h1 className=' font-medium text-xl px-5'>Sign up now to build your own portfolio for free!</h1>
          <div className='px-5'>
          <button className='bgcolor w-full my-4 text-xl py-3 rounded-lg dark:text-black lg:mb-10' onClick={() => navigate("/register")}>Get Started</button>
          </div>
          <div className='my-10 lg:flex relative px-5'>
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
          <div className='px-5'>
              <button className='bgcolor w-full my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20' onClick={() => navigate("/register")}>Get Started</button>
          </div>
          <h1 className='px-5 font-medium lg:font-bold text-xl lg:text-4xl lg:ml-10 lg:mb-10 md:text-4xl'>Explore endless possibilities with Binance</h1>
          <div className='lg:flex lg:justify-center lg:px-10 px-5'>
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
          <div className='px-5'>
              <button className='bgcolor w-full lg:w-[200px] my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20 lg:ml-20 lg:mt-10' onClick={() => navigate("/register")}>Explore Now</button>
          </div>
          <div className='mt-10 px-5 lg:mt-0 lg:flex relative'>
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
          <div className='px-5'>
              <button className='bgcolor w-full lg:w-[200px] my-4 text-xl py-3 rounded-lg dark:text-black md:mb-20 lg:mb-20' onClick={() => navigate("/register")}>Start Now</button>
          </div>
          <div className='lg:flex lg:items-center lg:justify-between px-5'>
              <div>
                  <h1 className=' font-medium lg:font-bold text-xl lg:text-4xl md:text-4xl'>Trade on the go. Anywhere, anytime.</h1>
                  <p className='text-gray-500 lg:text-xl lg:mt-6'>Stay in the know with our app and desktop client.</p>
              </div>
              <div className='flex items-center space-x-1  my-10 cursor-pointer hover:color'>
                  <p>Trade Bitcoin for free</p>
                  <MdKeyboardArrowRight className='text-2xl' />
              </div>
          </div>
          <div className='md:flex md:items-center mt-10'>
            <div className='flex justify-center md:px-14 lg:px-24 lg:flex-1 lg:py-20'> 
                <img src={halfmobil} alt="websiteviews" className='w-[60%] md:hidden'/>
                  <img src={mobile} alt="websiteviews" className=' hidden md:block lg:hidden'/>
                  <img src={desktop} alt="websiteviews" className='hidden lg:block' />
            </div>
              <div className='flex-1 md:block'>
                  <div className='flex w-full space-x-8 px-10 mt-10 md:hidden'>
                      <div className='flex-1 text-center py-4 hover:bg-gray-200 rounded-md cursor-pointer'>
                        <div className='flex justify-center text-3xl'>
                          <AiFillApple />
                        </div>
                          <h3 className='text-sm font-semibold'>App Store </h3>
                      </div>
                      <div className='flex-1 text-center py-4 hover:bg-gray-200 rounded-md cursor-pointer'>
                          <div className='flex justify-center text-3xl'>
                          <FaAndroid />
                          </div>
                          <h3 className='text-sm font-semibold'>Andriod APK </h3>
                      </div>
                      <div className='flex-1 text-center py-4 hover:bg-gray-200 rounded-md cursor-pointer'>
                          <div className='flex justify-center text-4xl'>
                          <MdApi />
                          </div>
                          <h3 className='text-sm font-semibold'>API </h3>
                      </div>
                  </div>
                <div className='flex items-center space-x-8 bg-gray-200 py-4 px-8 rounded-xl mt-4'>
                      <img src={scan} alt="websiteviews" className='w-28' /> 
                      <div>
                          <p className='text-gray-500'>Scan to Download</p>
                          <h2 className='text-2xl font-semibold'>iOS & Android</h2>
                      </div>
                </div>
                <div className='flex justify-center'>
                      <div className='my-10  md:flex-wrap hidden md:flex'>
                          <div className="hidden md:block w-[30%] lg:w-[25%] md:m-2 lg:m-4 text-center cursor-pointer hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl '>
                                  <AiFillApple />
                              </div>

                              <h3 className='hidden md:block font-semibold'>App Store</h3>
                          </div>
                          <div className="hidden md:block w-[30%] lg:w-[25%] md:m-2 lg:m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl '>
                                  <FaAndroid />
                              </div>
                              <h3 className='hidden md:block font-semibold'>Andriod APK</h3>
                          </div>
                          <div className="hidden md:block w-[30%] lg:w-[25%] md:m-2 lg:m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl'>
                                  <FaGooglePlay />
                              </div>

                              <h3 className='font-semibold'>Google Play</h3>
                          </div>
                          <div className="hidden lg:block w-[30%] lg:w-[25%] m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl'>
                                  <AiFillCloseCircle />
                              </div>

                              <h3 className='font-semibold'>MacOS</h3>
                          </div>
                          <div className="hidden lg:block w-[30%] lg:w-[25%] m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl'>
                                  <BsWindows />
                              </div>

                              <h3 className='font-semibold'>Windows</h3>
                          </div>
                          <div className="hidden lg:block w-[30%] lg:w-[25%] m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl'>
                                  <FaLinux />
                              </div>

                              <h3 className='font-semibold'>Linux</h3>
                          </div>
                          <div className="w-[30%] lg:w-[25%] md:m-2 lg:m-4 cursor-pointer text-center hover:bg-gray-200 rounded-md p-4">
                              <div className='flex justify-center text-4xl'>
                                  <MdApi />
                              </div>

                              <h3 className='font-semibold'>API</h3>
                          </div>
                      </div>
                </div>
              </div>
          </div>
          <div className='my-10 px-5'>
              <h1>Need help?</h1>
              <div className='lg:flex '>
                  <div className='w-full lg:w-[50% md:flex md:space-x-8'>
                      <div className='w-full md:w-[50%] my-2 p-4'>
                          <div className='lg:flex  lg:space-x-6'>
                              <img src={faqone} alt='' className='w-16 my-4 md:my-0 h-20' />
                              <div>
                                  <h2 className='font-semibold text-xl lg:mb-2 mb-4'>24/7 Chat Support</h2>
                                  <p className='text-md text-gray-700'>Get 24/7 chat support with our friendly customer service agents at your service.</p>
                                  <button className='color text-md mt-4'>Chat now</button>
                              </div>
                          </div>
                      </div>
                      <div className='w-full md:w-[50%] my-2 p-4'>
                          <div className='lg:flex  lg:space-x-6'>
                              <img src={faqtwo} alt='' className='w-16 my-4 md:my-0 h-20' />
                              <div>
                                  <h2 className='font-semibold text-xl lg:mb-2 mb-4'>FAQs</h2>
                                  <p className='text-md text-gray-700'>View FAQs for detailed instructions on specific features.</p>
                                  <button className='color text-md mt-4'>Learn more</button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className=' w-full md:w-[48%] lg:w-inherit my-2 p-4 lg:ml-10'>
                      <div className='lg:flex lg:space-x-6'>
                          <img src={faqthree} alt='' className='w-16 my-4 md:my-0 h-20' />
                          <div>
                              <h2 className='font-semibold text-xl lg:mb-2 mb-4'>Blog</h2>
                              <p className='text-md text-gray-700'>Stay up to date with the latest stories and commentary.</p>
                              <button className='color text-md mt-4' onClick={() => navigate("/register")}>Learn more</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='px-5 mb-10 py-10 bg-gray-200 text-center'>
              <h2 className='text-2xl lg:text-4xl font-semibold my-2'>Start earning today</h2>
              <button className='bgcolor w-full my-4 text-md font-semibold py-3 rounded-lg dark:text-black md:w-48' onClick={() => navigate("/register")}>Sign Up Now</button>
          </div>
    </div>
  )
}

export default SecondHomeItem