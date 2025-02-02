import React from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({ setToken }) => {
  const onLogout = () => {
    setToken('')
    toast.success('Logout')
  }
  return (
    <div className='flex bg-gray-200 shadow-lg items-center py-2 px-[4%] justify-between'>
      <Link to={`/`} className='w-80 flex flex-col items-start justify-center'>
        {/* <img src={assets.logo1} alt="" className='size-16' /> */}
        <div className='flex items-center justify-center font-semibold'>
          <h1 className='uppercase text-2xl sirin-stencil-regular'>The Musk Fund</h1>
        </div>
        <div className='flex items-center justify-start'>
          <h1 className='text-xs text-[#505050]/70 text-medium uppercase text-prata-regular text-start'>Admin panel</h1>
        </div>
      </Link>
      <button onClick={onLogout} className='bg-gradient-to-r from-[#b6c307] to-[#00b4d8] font-bold text-gray-800 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar