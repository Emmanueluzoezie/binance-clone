import{FaUser,FaKey,FaCalendar,FaMoneyBill,FaUserAltSlash,FaTimes, FaCalculator, FaPen} from 'react-icons/fa'

function AboutUser() {
  return (
    <header className='flex  w-full p-8'>
      <FaUser className='w-16 h-16 ' />
      <div className="info flex  flex-col gap-1">
        <h2 className='font-bold'>Anonymous-User9Bf82e <span className='border border-gray p-1 ml-2 text-gray-400 bg-gray-300'>Personal</span> <FaPen className='inline ml-2' /></h2>
        <div className="flex-p flex  gap-2">
          <p className='flex flex-col text-gray-400'>User ID <span className='text-lg text-gray-400'>12345</span></p>
          <p className='flex flex-col text-gray-400' >User Type<span className='text-lg text-gray-400'>Regular user</span></p>
          <p className='flex flex-col text-gray-400'>User Twitter <span className='text-lg text-gray-400'>not listed</span></p>
        </div>

      </div>
    </header>
  )
}

export default AboutUser