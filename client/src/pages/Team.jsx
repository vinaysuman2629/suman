import React from 'react'
import { assets } from '../assets/assets'

const Team = () => {
  return (
    <section id="team" className="py-12 md:py-24 px-8 mt-16 text-center bg-gradient-to-br from-[#f6fafb] to-[#ece9e9]">
      <h1 className="text-4xl font-bold text-[#0077b6] mb-2 uppercase">Meet Our Team</h1>
      <h2 className="text-xl font-medium text-[#0077b6] mb-10 uppercase">Our Founder and Engineer</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        <div className="bg-white p-8 flex flex-col items-center text-center rounded-xl shadow-lg border-2 border-gray-400 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
          <img
            src={assets.suman}
            alt="Founder Photo"
            className="w-36 h-36 rounded-full mb-6 shadow-md transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Suman Kumar</h3>
          <p className="text-base text-gray-600 mb-4">Founder & CEO of The Msuk Funds. Passionate about real estate.</p>
          <p className="text-lg font-semibold text-[#0077b6] uppercase">Founder</p>
        </div>
        <div className="bg-white p-8 flex flex-col items-center text-center rounded-xl shadow-lg border-2 border-gray-400 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
          <img
            src={assets.vinay}
            alt="Vinay Chaudhary"
            className="w-36 h-36 rounded-full mb-6 shadow-md transition-transform duration-300 hover:scale-110"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Vinay Chaudhary</h3>
          <p className="text-base text-gray-600 mb-4">Software Engineer with expertise in Full Stack development</p>
          <p className="text-lg font-semibold text-[#0077b6] uppercase">Software Engineer</p>
        </div>
      </div>
    </section>

  )
}

export default Team