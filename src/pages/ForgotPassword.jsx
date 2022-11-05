import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'

import React from 'react'

function ForgotPassword() {
  const [email, setEmail]= useState('')
  const navigate = useNavigate()
  const onChange = (e) => {
    setEmail(e.target.value);
    }
    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth,email)
         navigate('/')
        toast.success("Email sent")
      } catch (error) {
        toast.error('could not send password reset email')
      }
    }
  return (
    <div>
     <div className="flex flex-col px-14 py-2 my-2">
     <form onSubmit={onSubmit}>
     <label className='block mb-2'>Input Your Email here</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text" id='email' value={email} onChange={onChange}/>
       <button type='submit' className='bg-yellow-500  py-1 px-2 rounded-sm'>Reset Link</button>
     </form>
     </div>
    </div>
  )
}

export default ForgotPassword
