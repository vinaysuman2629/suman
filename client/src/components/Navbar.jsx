import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className='fixed top-0 bg-gradient-to-r from-[#b6c307] to-[#00b4d8] text-gray-700'>
            <div className='flex items-center justify-between h-16 w-screen p-1 md:px-5'>
                <div className='flex items-center justify-center'>
                    <img src={assets.logo} alt="logo" className='size-12 rounded' />
                </div>
                <div className='hidden md:block'>
                    <nav className='flex space-x-5 text-lg font-medium'>
                        <Link to={'/'} className='cursor-pointer'>Home</Link>
                        <Link to={'/about'} className='cursor-pointer'>About</Link>
                        <Link to={'/team'} className='cursor-pointer'>Our Team</Link>
                        <Link to={'/review'} className='cursor-pointer'>Reviews</Link>
                        <Link to={'/contact'} className='cursor-pointer'>Contact</Link>
                    </nav>
                </div>
                <div className='flex items-center gap-4'>
                    <div className='border-3 border-gray-700 bg-white size-10 rounded-full flex items-center justify-center font-bold cursor-pointer'>V</div>
                    <button className='bg-[#b6c307] py-1 px-5 text-lg font-medium text-gray-700 rounded-full'><Link>Login</Link></button>
                    <div onClick={() => setShowMenu((showMenu) ? false : true)} className='md:hidden cursor-pointer'>
                        <Menu color='#364153' size={40} />
                    </div>
                    <div className={`absolute top-16 right-0 w-[35%] ${showMenu ? 'block' : 'hidden'}`}>
                        <div className='flex flex-col gap-2 items-center justify-center bg-gradient-to-tr from-[#b6c307] to-[#00b4d8] text-base font-medium rounded-br-3xl rounded-tl-3xl p-5'>
                            <Link onClick={() => setShowMenu(false)} to={'/'}>Home</Link>
                            <Link onClick={() => setShowMenu(false)} to={'/about'}>About</Link>
                            <Link onClick={() => setShowMenu(false)} to={'/team'}>Our Team</Link>
                            <Link onClick={() => setShowMenu(false)} to={'/review'}>Reviews</Link>
                            <Link onClick={() => setShowMenu(false)} to={'/contact'}>Contact</Link>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Navbar