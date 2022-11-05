import React from 'react'
import { useStateContext } from '../context/useStateContext'
import RegisterWithEmail from './RegisterWithEmail'
import RegisterWithNumber from './RegisterWithNumber'

const RegisterComponent = () => {
    const { registerType, setRegisterType } = useStateContext()

    const pushToEmailType = () => {

    }
    const pushToNumberType = () => {

    }


  return (
    <div className='mt-20 flex justify-center md:justify-start md:ml-[20%]'>
          <div className=''>
              <h2 className='text-2xl font-bold'>Create Personal Account</h2>
              <div className='flex items-center space-x-4 mt-10 mb-10'>
                  <button className={`rounded-md text-md font-semibold p-2 ${registerType === "email" ? "bg-gray-300 text-black" : "text-gray-500"}`} onClick={() => setRegisterType("email")}>Email</button>
                  <button className={`text-md font-semibold rounded-md p-2 ${registerType === "number" ? "bg-gray-300 text-black" : "text-gray-500"}`} onClick={() => setRegisterType("number")}>Phone Number</button>
              </div>
              {registerType === "email" ?
                  <RegisterWithEmail /> : <RegisterWithNumber />}
              <h4>© 2017 - 2022 Binance.com. All rights reserved
                  Cookie Preferences</h4>
          </div>
    </div>
  )
}

export default RegisterComponent