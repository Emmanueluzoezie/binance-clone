import './App.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes} from "react-router-dom";
import Market from './pages/market';
import { useStateContext } from './context/useStateContext';
import Favorite from './pages/Favorite';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import OAuth from './pages/OAuth';
import ForgotPassword from './pages/ForgotPassword';
import PrivateRoute from './components/PrivateRoute'
import { MdOutlineMessage } from 'react-icons/md';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Security from './components/user-compenent/security';
import DashBoard from "./components/user-compenent/dashboard/dashBoard"
import { useSelector } from 'react-redux';
import { selectedUser } from './slice/userSlice';

function App() {
  const { sidebar, openLanguage } = useStateContext()

  const user = useSelector(selectedUser)

  return (
    <div className='bg-gray-50 dark:dark-theme h-screen relative'>
      <div className='fixed bottom-4 lg:bottom-10 text-2xl cursor-pointer lg:text-5xl p-4 rounded-full right-4 lg:right-10 bgcolor z-10'>
        <MdOutlineMessage />
      </div>

      {!user? (
        <>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/google' element={<OAuth />} />
                <Route path='/profile' element={<PrivateRoute />} >
                </Route>
            </Routes>
          </>
      ) :(
        <div className='pb-1'>
            <div className='hidden'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path='/market' element={<Market />} />
                <Route path='/favorite' element={<Favorite />} />
              
                {/* components  */}
                <Route path='/dashboard' element={<DashBoard />} />
                <Route path='/security' element={<Security />} />
              </Routes>
            </div>


        </div>
      )}
        
        <ToastContainer/>
    </div>
  );
}

export default App;




