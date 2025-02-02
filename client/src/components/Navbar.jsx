import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed z-20 top-0 left-1/2 w-screen transform -translate-x-1/2 bg-gray-100 text-gray-700 transition-all duration-300 
            ${scrolled ? 'md:rounded-3xl shadow-lg shadow-black/60 md:mt-4 md:w-[90%] border border-gray-300' : 'md:w-full'}`}>
            <div className='flex items-center justify-between h-16 px-5 md:px-20'>
                <Link to={`/`} className='w-44 flex items-center justify-start'>
                    <h1 className='uppercase text-2xl font-semibold'>The Musk Fund</h1>
                </Link>
                {/* <Link to={'/'} className='flex items-center justify-center'>
                    <img src={assets.logo} alt="logo" className='w-12 h-12 rounded' />
                </Link> */}
                <div className='hidden md:block'>
                    <nav className='flex space-x-5 text-lg font-medium'>
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/about', label: 'About' },
                            { path: '/team', label: 'Our Team' },
                            { path: '/review', label: 'Reviews' },
                            { path: '/contact', label: 'Contact' }
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="relative group cursor-pointer"
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full 
                                    ${location.pathname === item.path ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className='flex items-center gap-4'>
                    {/* Profile Toggle */}
                    <div onClick={() => setShowProfile(!showProfile)} className='border border-gray-700 bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer'>
                        V
                    </div>

                    {/* Login Button */}
                    <button className='bg-gradient-to-r from-[#b6c307] to-[#00b4d8] py-1 px-5 text-lg font-bold text-gray-800 rounded-full'>
                        <Link to={'/login'}>Login</Link>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div onClick={() => setShowMenu(!showMenu)} className='md:hidden cursor-pointer'>
                        <Menu color='#364153' size={40} />
                    </div>
                </div>
            </div>

            {/* Profile Dropdown */}
            {showProfile && (
                <div className='absolute z-20 top-16 right-10 w-48 bg-gray-100 border border-gray-300 text-base font-medium rounded-lg p-4 shadow-lg shadow-black/60'>
                    <div className='flex flex-col gap-2 items-start justify-center'>
                        <Link to={'/my-transaction'} onClick={() => setShowProfile(false)} className="cursor-pointer">
                            My Transaction
                        </Link>
                        <button>
                            <Link to={'/login'}>Login</Link>
                        </button>
                    </div>
                </div>
            )}

            {/* Mobile Menu */}
            {showMenu && (
                <div className='absolute z-20 top-16 right-0 w-[40%] bg-gray-100 border border-gray-300 text-base font-medium rounded-br-4xl rounded-tl-4xl p-5 shadow-lg shadow-black/60'>
                    <div className='flex flex-col gap-2 items-center'>
                        {[
                            { path: '/', label: 'Home' },
                            { path: '/about', label: 'About' },
                            { path: '/team', label: 'Our Team' },
                            { path: '/review', label: 'Reviews' },
                            { path: '/contact', label: 'Contact' }
                        ].map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setShowMenu(false)}
                                className="relative group cursor-pointer"
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full 
                                    ${location.pathname === item.path ? 'w-full' : ''}`} />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
