import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { useState } from "react"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import ThemeMode from '../components/themeMode';
import { useStateContext } from '../context/useStateContext';
import logo from "../data/cryptol.png"

function SignIn() {
  const [formData ,setFormData] = useState({
    email:'',
    password:''
  });
  const [colorTheme, setTheme] = ThemeMode();
  const { setOpenLanguage, openLanguage, language, setSidebar } = useStateContext()
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
          navigate('/profile')
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
    <div className='p-6'>
      <div className='flex justify-between items-center'>
        <img src={logo} className="w-24 md:w-36 cursor-pointer" alt="logo" onClick={() => navigate("/")} />
        <div className='flex items-center'>
          <h1 className='border-r-2 border-black dark:border-white pr-4 cursor-pointer' onClick={() => setOpenLanguage(true)}>{language}</h1>
          {colorTheme === "light" ? (<div className='text-xs pl-4 cursor-pointer'>
            <MdLightMode onClick={() => setTheme("light")} className="text-2xl" />
          </div>) : (
            <div className='text-xs pl-4 cursor-pointer'>
              <MdDarkMode onClick={() => setTheme("dark")} className="text-2xl" />
            </div>)}
        </div>
      </div>
      <div className='flex flex-col items-center pt-8'>
        <h2 className='text-2xl font-bold'>Login</h2>
        <form onSubmit={onSubmit} className='md:w-[500px]'>
          <label className='block'>Email</label>
          <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text" id='email' value={email} onChange={onChange} />
          <label className='block'>Password</label>
          <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="password" id='password' onChange={onChange} value={password} />
          <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
            <h2>Sign In</h2>
          </button>
          <p className='font-semibold my-5 cursor-pointer'>Dont Have an Account Yet? <span className='color' onClick={onSignUp}>
            Sign up</span></p>
          <p className='font-semibold my-5 color cursor-pointer ' onClick={onForgot}>Forgot Password</p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
