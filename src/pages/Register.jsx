import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Language from '../components/Language'
import RegisterComponent from '../components/RegisterComponent'
import ThemeMode from '../components/themeMode'
import { useStateContext } from '../context/useStateContext'
import logo from "../data/cryptol.png"

const Register = () => {
  const { setOpenLanguage, openLanguage, language, setSidebar } = useStateContext()
  const [colorTheme, setTheme] = ThemeMode();
  const navigate = useNavigate()

  const handleLanguage = () => {
    
  }

  return (
    <div className='p-4 bg-gray-100 dark:dark-theme'>
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
      {openLanguage && <Language />}
        <RegisterComponent />
    </div>
  )
}

export default Register 