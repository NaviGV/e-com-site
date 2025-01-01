import React from 'react'
import {assets} from '../assets/assets'


const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center justify-between px-[4%] py-2'>
        <img className='w-[max(10%,80px)]' src={assets.logo}/>
        <button onClick={()=>setToken('')} className='rounded-full bg-gray-600 py-2 px-5 sm:px-7 sm:py-2 my-2 text-white text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar