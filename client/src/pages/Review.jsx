import React from 'react'
import { assets } from '../assets/assets'

const Review = () => {
  return (
    <section className="py-12 md:py-24 px-8 mt-16 text-center bg-gradient-to-br from-[#f6fafb] to-[#ece9e9]">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">
        What People Say About Us
      </h1>
      <h2 className="text-lg font-medium text-blue-600 mb-8">
        Trusted by thousands of investors across the country
      </h2>

      <div className="trusted mb-12 text-center">
        <img
          src={assets.homeinhand}
          alt="The Msuk Funds is a trusted company"
          className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
        />
        <p className="text-lg text-gray-700 mt-4">
          "The Msuk Funds is one of the most trusted companies to invest your money.
          Our clients' success stories speak for themselves."
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md text-left transition transform hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Rohit Sharma</h3>
          <p className="text-yellow-500 text-xl">★★★★★</p>
          <p className="text-gray-500 text-base mt-2">
            "Amazing service and highly professional team. My investment journey
            was seamless and rewarding. Highly recommend!"
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md text-left transition transform hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Anjali Verma</h3>
          <p className="text-yellow-500 text-xl">★★★★☆</p>
          <p className="text-gray-500 text-base mt-2">
            "Trustworthy platform with great customer support. I feel safe
            investing my hard-earned money here."
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md text-left transition transform hover:-translate-y-2 hover:shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Rahul Gupta</h3>
          <p className="text-yellow-500 text-xl">★★★★★</p>
          <p className="text-gray-500 text-base mt-2">
            "The team guided me every step of the way. The returns were beyond
            my expectations. Great experience!"
          </p>
        </div>
      </div>
    </section>
  )
}

export default Review