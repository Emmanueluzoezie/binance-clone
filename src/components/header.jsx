import { getAuth, onAuthStateChanged } from "firebase/auth"
import { FaBell, FaUser } from "react-icons/fa"
import { FiMenu } from "react-icons/fi"
import { MdPerson } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../context/useStateContext"
import logo from "../data/cryptol.png"

const Header = () => {
  const { setSidebar, setOpenLanguage, setCurrencyList, checkUser, setCheckUser, setActivePage, activePage } = useStateContext()
    const navigate = useNavigate()

  const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckUser(true)
      } else {
        setCheckUser(false)
      }
    })

    const handleSidebar= () => {
        setSidebar(true)
        setOpenLanguage(false)
      setCurrencyList(false)
    }

  return (
    <>
      <header className='hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:text-gray-600 lg:text-sm lg:text-bold md:p-2 lg:py-6  lg:m-1'>
        <div className="logo">
          <img src={logo} className="w-24 md:w-36 cursor-pointer" alt="logo" onClick={() => navigate("/")} />
        </div>
          <ul className="cursor-pointer flex justify-between space-x-2 lg:space-x-6mt-2 items-center">
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
            <li><FaBell /></li>
            
          </ul>
        <div>
          <ul className="cursor-pointer flex items-center justify-between gap-2 mt-2">
            <li><FaUser /></li>
            <li>Downloads</li>
            <li>English</li>
            <li className="border-l-2 px-1 text-center">USD</li>
          </ul>
        </div>
      </header>
      <div className="flex justify-between p-5 dark:text-white lg:hidden">
        <img src={logo} className="w-24 md:w-36 cursor-pointer" alt="logo" onClick={() => navigate("/")} />

        <div className="flex items-center">
          <div>
            {checkUser ? (
              <div className="mr-4 bg-gray-300 rounded-full p-1 text-xl text-gray-500 cursor-pointer" >
                <MdPerson />
              </div>) :
              ("")}
          </div>
          <div className="text-2xl cursor-pointer">
            <FiMenu onClick={handleSidebar} className='dark:text-white text-3xl' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header