import { FiMenu } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import { useStateContext } from "../context/useStateContext"
import logo from "../data/cryptol.png"

const Header = () => {
  const { setSidebar, setOpenLanguage, setCurrencyList } = useStateContext()
    const navigate = useNavigate()

    const handleSidebar= () => {
        setSidebar(true)
        setOpenLanguage(false)
      setCurrencyList(false)
    }

  return (
    <div className="flex justify-between p-5 dark:text-white">
      <img src={logo} className="w-24 md:w-36 cursor-pointer" alt="logo" onClick={() => navigate("/")}/>
      <div className="text-2xl cursor-pointer">
        <FiMenu onClick={handleSidebar} className='dark:text-white text-3xl'/>
      </div>
    </div>
  )
}

export default Header