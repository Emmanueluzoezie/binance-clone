import{FaUser,FaKey,FaCalendar,FaMoneyBill,FaUserAltSlash,FaTimes, FaCalculator, FaPen, FaEdit} from 'react-icons/fa'
import { MdKeyboardArrowDown, MdKeyboardArrowRight, MdVerified } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import personsvg from  "../../data/persontwosvg.png"
import { RiArrowDropDownLine } from 'react-icons/ri'

function AboutUser() {
  return (
    <article className='flex items-center  w-full px-4 py-6 space-x-6 bg-gray-100'>
      <div className='relative rounded-full user'>
        <div className='images rounded-full m-0'>
          <img src={personsvg} alt='' className='w-16 h-16 image rounded-full' />
        </div>

        <div className='edit-profile'>
          <FaEdit className=' text-2xl' />
        </div>
      </div>
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center font-semibold space-x-3'>
            <h2>Anonymous-User9Bf82e</h2> 
            < BiEditAlt className=' hidden md:flex'/> 
            <h2 className='bg-gray-200 px-2 rounded-md text-sm hidden md:flex'>Personal</h2> 
            <MdVerified className='text-gray-600'/>
            </div>
          <div className='flex space-x-3 md:hidden'>
            <div className='bg-gray-200 p-1 text-gray-500 rounded-md'>< BiEditAlt /></div>
            <div className='bg-gray-200 text-2xl text-gray-500 rounded-md'> <MdKeyboardArrowDown /></div>
          </div>
        </div>
        <div className='flex items-center text-sm space-x-3 md:space-x-0 mt-1 text-gray-500'>
          <h2 className='bg-gray-200 px-2  rounded-md md:hidden'>Personal</h2>
          <div className='md:flex space-x-10 '>
            <div className='flex ml-0 space-x-2 md:space-x-0 md:block'>
              <h2 className='md:text-[13px] flex items-center'> User ID </h2>
              <span className='md:text-black m-0 md:text-[13px]'>12345</span>
            </div>
            <div className='hidden space-x-2 md:space-x-0 md:block'>
              <h2 className='md:text-[13px] flex items-center'> User Type <MdKeyboardArrowRight className='ml-1 text-lg' /></h2>
              <span className='md:text-black m-0 md:text-[13px]'>Regular User</span>
            </div>
            <div className='hidden space-x-2 md:space-x-0 md:block'>
              <h2 className='md:text-[13px] flex items-center'> Twitter <MdKeyboardArrowRight className='ml-1 text-lg' /></h2>
              <span className='md:text-black m-0 md:text-[13px]'>not link</span>
            </div>
            <div className='hidden space-x-2 md:space-x-0 md:block'>
              <h2 className='md:text-[13px] flex items-center'> Last login time<MdKeyboardArrowRight className='ml-1 text-lg' /></h2>
              <div className='lg:flex lg:space-x-2'>
                <span className='md:text-black md:block m-0 md:text-[13px]'>2022-11-15</span>
                <span className='md:text-black m-0 md:text-[13px]'>14:47:32(102.91.4.121)</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </article>
  )
}

export default AboutUser