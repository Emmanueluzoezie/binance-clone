import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { toast } from 'react-toastify'
 import google from '../data/google.png'
 function OAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleClick =async ()=>{
    try {
      const auth =getAuth();
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        })
      }
      navigate('/')
    } catch (error) {
      toast.error('Could not authorize with Google')
    }
  }
   return (
    <div className="flex flex-col items-center">
      <h2 className='text-2xl font-semibold py-2 my-3'>Sign Up with your Google Account</h2>
    <button className='flex items-center flex-1 justify-center color  p-3 rounded-lg' onClick={onGoogleClick}>
    <img src={google} className="w-4 h-4 mr-3" alt="google-logo" />
    Google
    </button>
      </div>
    )
 }
 
 export default OAuth