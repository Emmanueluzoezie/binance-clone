import React from 'react'

export const TopCrypto = ({ id, name, symbol, image, price, percent }) => {
    return (
        <div className='w-full flex items-center px-5 my-4'>
            <div className='flex-1'>
                <div className='flex items-center space-x-2'>
                    <img src={image} alt={name} className="rounded-full md:w-10 md:h-10 w-8 h-8 mr-2" />
                    <h1 className='text-sm md:text-lg font-semibold'>{name}</h1>
                    <h1 className='text-sm md:text-lg  uppercase font-light'>{symbol}</h1>
                </div>
            </div>
            <div className='flex w-[50%] md:w-[40%] lg:w-[25%] justify-between space-x-16 md:space-x-28 lg:space-x-44 text-lg'>
                <h1 className='text-sm md:text-lg  font-semibold '>{price}</h1>
                <h1 className='text-sm font-semibold md:text-lg '>{percent}</h1>
            </div>
            <div className='hidden md:block md:flex-1'>
                <div className='hidden md:flex justify-end md:pr-20 lg:pr-28'>
                    <h1 className=''>market</h1>
                </div>
            </div>
        </div>
    )
}