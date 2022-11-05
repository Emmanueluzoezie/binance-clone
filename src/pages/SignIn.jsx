import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useState } from "react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
function SignIn() {
  const [formData ,setFormData] = useState({
    email:'',
    password:''
  });
  const {email , password}= formData
  
  const navigate= useNavigate()
 
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const onSubmit = async(e)=>{
    e.preventDefault();
    try {
      const auth =getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      if(userCredentials.user){
          navigate('/')
      }
    } catch (error) {
       toast.error('invalid user Credentails')
    }
    }
  const onSignUp= ()=>{
  
   navigate('/register')
  }
  const onForgot= ()=>{
    navigate('/forgot-password')
  }
  return (
    <div className='flex flex-col items-center pt-8'>
     <h2 className='text-2xl font-bold'>Already Have An Account</h2>
      <form onSubmit={onSubmit} className='md:w-[500px]'>
      <label className='block'>Email</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text" id='email' value={email} onChange={onChange}/>
      <label className='block'>Password</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="password"  id='password' onChange={onChange} value={password}/>
      <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
        <h2>Sign In</h2>
      </button>
      <p className='font-semibold my-5 cursor-pointer'>Dont Have an Account Yet? <span className='color' onClick={onSignUp}>
        Sign up</span></p>
        <p className='font-semibold my-5 color cursor-pointer 'onClick={onForgot}>Forgot Password</p>
    </form>
    </div>
  )
}

export default SignIn
