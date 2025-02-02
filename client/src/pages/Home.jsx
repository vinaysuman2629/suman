import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faLandmark, faBuilding } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const Home = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });
  return (
    <div>
      <section className="hero bg-black/40 h-full md:h-screen text-white py-20 mt-16 relative overflow-hidden flex flex-col justify-center items-center">
        <img src={assets.landwithmoney} className="fixed md:h-screen w-screen -z-1 scale-[175%] md:scale-100" alt="" />
        <div className="flex flex-col items-center justify-around mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}>
            Invest in Property, Secure Your Future
          </h1>
          <p className="mt-4 text-lg md:text-xl font-base" style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)' }}>
            Join us and make smarter investments in real estate to grow your wealth!
          </p>
          <Link
            to={'/login'}
            className="mt-8 px-8 py-3 bg-orange-500 text-white font-bold rounded-full shadow-lg transform transition-transform hover:scale-110"
          >
            Get Started
          </Link>
        </div>
      </section>
      <section id="about" className="about bg-gradient-to-r from-white via-gray-100 to-gray-100 py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-center uppercase tracking-wider">
            Why Choose Us for Your Investment?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              { title: "Quick Profits", desc: "Achieve substantial returns faster with our investment strategies." },
              { title: "Expert Guidance", desc: "Professional advice to make the best choices for your financial goals." },
              { title: "Secure Investments", desc: "Safe and transparent transactions ensuring your investment’s safety." },
              { title: "High-Quality Deals", desc: "Access to the best real estate opportunities to maximize your returns." }
            ].map((item, index) => (
              <li key={index} className="bg-white px-10 py-6 rounded-lg shadow-lg hover:transform hover:translate-y-2 hover:shadow-xl transition-all text-center relative">
                <div className="absolute top-2 left-2 w-1 h-20 bg-yellow-400 rounded-lg"></div>
                <h2 className="text-xl md:text-2xl font-bold text-[#0077b6] mb-4 block">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-20 px-8 bg-gradient-to-r from-white via-gray-100 to-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Where Do You Want to Invest?</h2>
          <div className="investment-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {[
              { img: assets.logo_nav, title: "Company", desc: "Invest in high-growth companies to multiply your wealth." },
              { img: assets.landwithmoney, title: "Lands", desc: "Secure your future by owning valuable real estate." },
              { img: assets.flat2, title: "Flats", desc: "Earn stable rental income by investing in modern flats." },
              { img: assets.house, title: "House", desc: "Buy homes to grow your portfolio with premium assets." }
            ].map((item, index) => (
              <div key={index} className="card bg-white rounded-xl overflow-hidden shadow-lg hover:transform hover:translate-y-2 hover:shadow-xl transition-all">
                <div className="card-image h-52 flex items-center justify-center">
                  <img src={item.img} className="h-full" alt="" />
                </div>
                <div className="card-content p-6 text-center">
                  <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold">{item.title}</h3>
                  <p className="text-gray-600 my-4">{item.desc}</p>
                  <button className="bg-[#0077b6] text-white px-6 py-2 rounded-md">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section ref={statsRef} className="stats-section py-20 px-8 bg-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">Investor Statistics</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover how our investors are securing their future by investing in the right opportunities.
        </p>

        <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: faUsers, start: 50, end: 101, label: "Total Investors" },
            { icon: faChartLine, start: 30, end: 92, label: "Live Investors" },
            { icon: faLandmark, start: 10, end: 60, label: "Land Investments" },
            { icon: faBuilding, start: 5, end: 40, label: "Company Investments" }
          ].map((item, index) => (
            <div
              key={index}
              className="stat-card bg-gray-100 p-8 rounded-lg shadow-lg hover:transform hover:translate-y-2 hover:shadow-xl transition-all"
            >
              <FontAwesomeIcon icon={item.icon} className="text-4xl text-blue-600 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                {isInView ? <CountUp start={item.start} end={item.end} duration={3} /> : item.start}+
              </h2>
              <p className="text-base md:text-lg font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
