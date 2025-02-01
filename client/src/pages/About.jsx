import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <section class="py-12 md:py-24 px-8 mt-16 text-center bg-gradient-to-br from-[#f6fafb] to-[#ece9e9]">
      <div class="mx-auto text-center max-w-[1100px]">
        <div>
          <h1 class="text-[3rem] font-bold text-[#2d3748] mb-[1.5rem]">About Us</h1>
          <h2 class="text-[2.2rem] text-[#0077b6] mb-[1.5rem]">Your Trusted Partner in Real Estate</h2>
          <p class="text-[#4a5568] text-[1.1rem] leading-[1.8] max-w-[800px] mx-auto">
            Welcome to <span class="font-semibold text-green-600">Future Invest Realty</span>, where we guide you in making profitable land investments.
          </p>
        </div>
        <div class="my-[2rem] flex items-center justify-center w-full">
          <img src={assets.homeinhand} alt="Real Estate Investment" class="w-full max-w-[500px] h-auto rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-linear" />
        </div>
        <div class="my-[2rem]">
          <h2 class="text-[2.2rem] text-[#0077b6] mb-[1rem]">Why Invest in Land?</h2>
          <p class="text-[#4a5568] text-[1.1rem] leading-[1.8] max-w-[800px] mx-auto">
            Land is a secure, appreciating asset that offers long-term growth and stability. It's one of the best investments you can make.
          </p>
        </div>
        <div class="my-[2rem]">
          <h2 class="text-[2.2rem] text-[#0077b6] mb-[1rem]">Our Vision and Mission</h2>
          <p class="text-[#4a5568] text-[1.1rem] leading-[1.8] max-w-[800px] mx-auto">
            To revolutionize the real estate market by making land investments accessible, secure, and profitable for all.
          </p>
        </div>
        <div class="my-[2rem]">
          <a href="#contact" class="bg-[#48bb78] text-white py-[15px] px-[30px] rounded-[30px] shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-all duration-300 ease-linear text-[1.1rem] hover:bg-[#38a169] hover:scale-[1.05]">
            Get Started Now
          </a>
        </div>
      </div>
    </section>

  )
}

export default About