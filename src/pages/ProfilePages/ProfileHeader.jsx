import { useNavigate } from "react-router-dom"
import{FaUser, FaBell} from'react-icons/fa'
function ProfileHeader (){
 const navigate = useNavigate()
 return(
 <>
  <header className='flex flex-row justify-between text-gray-600 text-sm text-bold p-2 m-1'>
    <div className="logo">
    <img src='' className="w-24 md:w-36 cursor-pointer" alt="logo" onClick={() => navigate("/")}/>
    </div>
     <div className="profile-list">
       <ul className="cursor-pointer flex justify-between gap-2 mt-2 md:">
         <li>Buy Crypto</li>
         <li className="bg-yellow-400 rounded-md text-center">EUR</li>
         <li>Markets</li>
         <li>Trade </li>
         <li>Deriavatives</li>
         <li>Earn</li>
         <li>Fiance</li>
         <li>NFT <span className="bg-yellow-400 rounded-md text-center p-1 ">New</span></li>
         <li>Institution Wallet</li>
         <li>Orders</li>
         <li><FaUser/></li>
         <li><FaBell/></li>
         <li>Downloads</li>
         <li>English</li>
         <li className="border-l-2 border-r-2 px-1 text-center">USD</li>
       </ul>
     </div>
  </header>
 </>
 )
}

export default ProfileHeader