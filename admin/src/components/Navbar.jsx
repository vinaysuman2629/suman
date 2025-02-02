import React from 'react'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const Navbar = ({ setToken }) => {
  const onLogout = () => {
    setToken('')
    toast.success('Logout')
  }
  return (
    <div className='flex bg-gradient-to-r from-[#b6c307] to-[#00b4d8] shadow-lg items-center py-2 px-[4%] justify-between'>
      <div className='w-80 flex items-center justify-center'>
        <img src={assets.Logomsuk} alt="" className='size-12 rounded-full' />
      </div>
      <div className='flex items-center justify-start'>
        <h1 className='text-2xl text-gray-700 font-medium uppercase text-prata-regular text-start'>Admin Dashboard</h1>
      </div>
      <button onClick={onLogout} className='bg-gradient-to-r from-[#b6c307] to-[#00b4d8] font-bold text-gray-800 px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar