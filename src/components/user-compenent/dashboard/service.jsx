import serviceicon from '../../../data/serviceicon.png'
import serviceiconone from '../../../data/serviceiconone.png'
import serviceicontwo from '../../../data/serviceicontwo.png'
import serviceiconthree from '../../../data/serviceiconthree.png'
import serviceiconfour from '../../../data/serviceiconfour.png'
import { MdKeyboardArrowRight, MdOutlineFileCopy } from 'react-icons/md'
import Banner from './bannex'

const Service = () => {

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;

  return (
    <div className='px-5 mb-20'>
        <h2 className='font-semibold mt-20 mb-7 text-[19px]'>More Service</h2>
        <div className='space-y-4'>
        <div className='border-[1px] border-gray-300 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center'>
            <img src={serviceiconone} alt="" className='w-7 h-7' />
          </div>
          <div>
            <h1 className='font-semibold'>Learn and Earn</h1>
            <p className='text-sm text-gray-600'>Earn FREE crypto while you learn with Binance</p>
          </div>
        </div>
        <div className='border-[1px] border-gray-300 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center'>
            <img src={serviceicon} alt="" className='w-7 h-7' />
          </div>
          <div>
            <h1 className='font-semibold'>Refferal</h1>
            <p className='text-sm text-gray-600'>Earn up to 40% commission</p>
          </div>
        </div>
        <div className='border-[1px] border-gray-300 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center'>
            <img src={serviceicontwo} alt="" className='w-7 h-7' />
          </div>
          <div>
            <h1 className='font-semibold'>Open Orders</h1>
            <p className='text-sm text-gray-600'>View all spot orders</p>
          </div>
        </div>
        <div className='border-[1px] border-gray-300 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center'>
            <img src={serviceiconthree} alt="" className='w-7 h-7' />
          </div>
          <div>
            <h1 className='font-semibold'>Wallett Direct</h1>
            <p className='text-sm text-gray-600'>Transfer coins or tokens between Binance.com account and Binance Chain Wallet</p>
          </div>
        </div>
        <div className='border-[1px] border-gray-300 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center'>
            <img src={serviceiconfour} alt="" className='w-7 h-7' />
          </div>
          <div>
            <h1 className='font-semibold'>Trading fees</h1>
            <div className='flex flex-wrap'>
              <div className='text-sm text-gray-600'>
               Your Fee Level VIP Regular User Using BNB Deduction (25% discount)
              </div>
              <div className='w-6 bg-yellow-400 flex justify-end rounded-full p-[1px]'><div className='w-3 rounded-full h-3 bg-white' /></div>
            </div>
          </div>
        </div>
        </div>

        <div className='mt-20 mb=7'>
        <div className='flex justify-between items-center mb-5'>
          <h2 className='font-semibold text-[19px]'>Announcement</h2>
          <div className='p-[2px] bg-slate-200'>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className='rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center justify-center text-xl text-gray-500'>
            <MdOutlineFileCopy />
          </div>
          <div className='my-2 rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
            <div>
              <h1 className='font-semibold text-[15px]'>APT, POLYX & VIDTT Available via Credit/Debit Card</h1>
              <p className='text-[13px] text-gray-600'>
                {currentDate}
              </p>
            </div>
            < MdKeyboardArrowRight className='text-gray-600 ml-10 text-2xl' />
          </div>
        </div>
        <div className='rounded-md cursor-pointer flex p-2 space-x-3 items-centers'>
          <div className='flex items-center justify-center text-xl text-gray-500'>
            <MdOutlineFileCopy />
          </div>
          <div className='flex items-center'>
            <div className='flex-1'>
              <h1 className='font-semibold text-[15px]'>Binance Margin Will Delist GTO, TRIBE & Nore MArgin Pairs on Cross Margin & Isolated Margin</h1>
              <p className='text-[13px] text-gray-600'>
                {currentDate}
              </p>
            </div>
            < MdKeyboardArrowRight className='text-gray-600 ml-10 text-2xl'/>
          </div>
        </div>
        </div>
        <Banner />
    </div>
  )
}

export default Service