import{FaUser,FaKey,FaCalendar,FaMoneyBill,FaUserAltSlash,FaTimes, FaCalculator, FaPen} from 'react-icons/fa'

function ProfileSection() {
  return (
    <div className="flex flex-row mt-4 w-full gap-8">
    <div className="leftside">
      <ul className='text-gray-400 text-bold flex flex-col gap-6 border-r-2 '>
        <li className='mx-2'> <FaUser className='inline mr-1'/> Dashboard</li>
        <li className='mx-2'> <FaKey className='inline mr-1'/> Security</li>
        <li className='mx-2'> <FaCalendar className='inline mr-1'/>Identification</li>
        <li className='mx-2'> <FaMoneyBill className='inline mr-1'/>Payment</li>
        <li className='mx-2'> <FaUserAltSlash className='inline mr-1'/>Referral</li>
        <li className='mx-2'> <FaCalculator className='inline mr-1'/>Task Center</li>
        <li className='mx-2'> <FaCalendar className='inline mr-1'/>Api Management</li>
        <li className='mx-2'> <FaTimes className='inline mr-1'/>Setting</li>
      </ul>
    </div>
    <div className="rightside">
     <header  className='flex  w-full p-8'>
    {/* need to make the width full */}
      <FaUser className='w-16 h-16 '/>
       <div className="info flex  flex-col gap-1">
        <h2 className='font-bold'>Anonymous-User9Bf82e <span className='border border-gray p-1 ml-2 text-gray-400 bg-gray-300'>Personal</span> <FaPen className='inline ml-2'/></h2>
         <div className="flex-p flex  gap-2">
         <p className='flex flex-col text-gray-400'>User ID <span className='text-lg text-gray-400'>12345</span></p>
         <p className='flex flex-col text-gray-400' >User Type<span className='text-lg text-gray-400'>Regular user</span></p>
         <p className='flex flex-col text-gray-400'>User Twitter <span className='text-lg text-gray-400'>not listed</span></p>
         </div>
    
       </div>
     </header>
     <section>
       <div className="showcase">
        
       </div>
     </section>
    </div>
    </div>
  )
}

export default ProfileSection