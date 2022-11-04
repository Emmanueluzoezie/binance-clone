import React from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { FaThemeco } from 'react-icons/fa'
import ThemeMode from '../themeMode';

const Theme = () => {
    const [colorTheme, setTheme] = ThemeMode();

  return (
      <div className='flex justify-between items-center  hover:bg-gray-300 dark:hover:dark-hover px-4 py-3 cursor-pointer' onClick={() => { colorTheme === "light" ? (setTheme('light')) : (setTheme('dark'))}}>
          <h2 className='text-bold text-xl flex items-center '>
              <FaThemeco />
            <p className=' ml-2'>Theme</p>
          </h2>
          {colorTheme === "light" ? (<div className='text-xs'>
              <MdLightMode onClick={() => setTheme("light")} className="text-2xl" />
          </div>) : (
              <div className='text-xs'>
                  <MdDarkMode onClick={() => setTheme("dark")} className="text-2xl" />
              </div>)}
      </div>
  )
}

export default Theme