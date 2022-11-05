import React from 'react'

const RegisterWithEmail = () => {
  return (
    <form className='md:w-[500px]'>
      <label className='block'>Person Email</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300 dark:bg-gray-400 dark:text-black' type="text"/>
      <label className='block'>Password</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300 dark:bg-gray-400 dark:text-black' type="text" />
      <label className='block'>Referral ID (Optional)</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300 dark:bg-gray-400 dark:text-black' type="text" />
      <div className='flex items-start space-x-4 mb-6' >
        <input type="checkbox" className=' mt-1'/>
        <p>I have read and agree to Cryptocoin’s Terms of Service and <span className='hover:underline cursor-pointer'>Privacy Policy</span>.</p>
      </div>
      <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
        <h2>Create Personal Account</h2>
      </button>
      <p className='font-semibold my-5'>Not looking for a personal account? <span className='color'>Sign up for an entity account</span></p>
    </form>
  )
}

export default RegisterWithEmail