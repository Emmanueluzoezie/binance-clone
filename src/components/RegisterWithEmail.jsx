import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {db} from'../firebaseConfig';
import{toast} from 'react-toastify'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setDoc ,doc, serverTimestamp } from "firebase/firestore"
const RegisterWithEmail = () => {
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })
  const {email, password} =formData;
 const navigate = useNavigate()
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const referral= Math.random()*100000;
  const onSubmit = async (e)=>{
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredentail = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentail.user;
      const formDataCopy={...formData}
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp()
      await setDoc(doc(db,'users', user.uid), formDataCopy)
      navigate('/')
      toast.success('account created')
    } catch (error) {
      toast.error(error.message)
    }
   }
  return (
    <form onSubmit={onSubmit} className='md:w-[500px]'>
      <label className='block'>Person Email</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text" id='email' value={email} onChange={onChange}/>
      <label className='block'>Password</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text"  id='password' onChange={onChange} value={password}/>
      <label className='block'>Referral ID (Optional)</label>
      <input className='block w-full mb-6 p-4 rounded-lg outline-yellow-300
       dark:bg-gray-400 dark:text-black' type="text" value={referral} readOnly/>
      <div className='flex items-start space-x-4 mb-6' >
        <input type="checkbox" className=' mt-1'/>
        <p>I have read and agree to Cryptocoin’s Terms of Service and <span className='hover:underline cursor-pointer'>Privacy Policy</span>.</p>
      </div>
      <button className='flex items-center justify-center bgcolor w-full p-2 space-x-2 text-lg text-black rounded-lg'>
        <h2>Create Personal Account</h2>
      </button>
      <p className='font-semibold my-5'>Already have an account <span className='color' onClick={() => navigate("/sign-in")}>Sign in</span></p>
      <p className='font-semibold my-5'>Not looking for a personal account? <span className='color'>Sign up for an entity account</span></p>
    </form>
  )
}

export default RegisterWithEmail