
import './App.css';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Market from './pages/market';
import Language from './components/Language';
import Currency from './components/Currency';
import { useStateContext } from './context/useStateContext';
import Favorite from './pages/Favorite';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import OAuth from './pages/OAuth';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import { MdOutlineMessage } from 'react-icons/md';

function App() {
  const { sidebar, openLanguage, currencyList } = useStateContext()

  return (
    <div className='bg-gray-50 dark:dark-theme h-screen relative'>

     <div className='fixed bottom-4 lg:bottom-10 text-2xl cursor-pointer lg:text-5xl p-4 rounded-full right-4 lg:right-10 bgcolor z-10'>
        <MdOutlineMessage />
     </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/market' element={<Market />} />
          <Route path='/favorite' element={<Favorite />} />
        <Route path='/register' element={<Register />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/google' element={<OAuth />} />
        <Route path='/profile' element={<PrivateRoute />} >
           <Route path='/profile' element={<Profile/>} />
          </Route>
        <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <ToastContainer/>
    </div>
  );
}

export default App;
