import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { FaThemeco } from 'react-icons/fa'
import ThemeMode from '../themeMode';

const Theme = () => {
    const [colorTheme, setTheme] = ThemeMode();

  return (
      <div className='flex justify-between items-center  hover:bg-gray-200 dark:hover:dark-hover px-4 py-3 cursor-pointer icon-color' onClick={() => { colorTheme === "light" ? (setTheme('light')) : (setTheme('dark'))}}>
          <h2 className='text-md flex items-center '>
              <FaThemeco className=''/>
              <p className=' ml-2 text-black'>Theme</p>
          </h2>
          {colorTheme === "light" ? (<div className='text-xs'>
              <MdLightMode onClick={() => setTheme("light")} className="text-2xl text-black" />
          </div>) : (
              <div className='text-xs'>
                      <MdDarkMode onClick={() => setTheme("dark")} className="text-2xl text-black" />
              </div>)}
      </div>
  )
}

export default Theme