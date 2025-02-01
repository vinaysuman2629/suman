import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='bg-[#333] flex flex-col items-start justify-around py-16 px-5 md:px-20 text-white'>
            <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-3 items-center justify-between w-full'>
                <div className='flex flex-col w-full items-center justify-start h-56'>
                    <h1 className='text-xl uppercase border-b-2 font-semibold border-orange-400 pb-1'>Quick Links</h1>
                    <div className='flex flex-col gap-1.5 mt-4 font-medium text-sm items-center justify-center'>
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Our Team</Link>
                        <Link>Reviews</Link>
                        <Link>Contact</Link>
                    </div>
                </div>
                <div className='flex flex-col w-full items-center justify-start h-56'>
                    <h1 className='text-xl uppercase border-b-2 font-semibold border-orange-400 pb-1'>Contact Info</h1>
                    <div className='flex flex-col gap-2.5 mt-4 font-medium text-sm items-center justify-center'>
                        <div className="flex items-start justify-center gap-2 w-full">
                            <MapPin size={18} />
                            <p className="w-[90%] leading-tight">
                                Bhagirath Bhawan 1st Floor, NH2 Barkattha Road, Tuio, Hazaribagh, Jharkhand, India 825323
                            </p>
                        </div>
                        <div className="flex items-start justify-center gap-2 w-full">
                            <Phone size={18} />
                            <p className="w-[90%] leading-tight">
                                +91 7543070095
                            </p>
                        </div>
                        <div className="flex items-start justify-center gap-2 w-full">
                            <Mail size={18} />
                            <p className="w-[90%] leading-tight">
                                infothemsukfunds@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full items-center justify-start h-56'>
                    <h1 className='text-xl uppercase border-b-2 font-semibold border-orange-400 pb-1'>Follow Us</h1>
                    <div className='flex items-center justify-around mt-4 w-1/2'>
                        <a href=""><Facebook className='hover:text-orange-400' size={32} /></a>
                        <a href=""><Twitter className='hover:text-orange-400' size={32} /></a>
                        <a href=""><Linkedin className='hover:text-orange-400' size={32} /></a>
                        <a href=""><Instagram className='hover:text-orange-400' size={32} /></a>
                    </div>
                </div>
            </div>
            <div className='text-white text-xs mt-24 pt-2 border-t border-[#444]'>
                <p>© 2025 Real Estate Investments. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer