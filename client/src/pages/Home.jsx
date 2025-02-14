import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faLandmark, faBuilding, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';

const Home = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/95 to-teal-800/95">
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute z-0 w-full h-full object-cover opacity-20"
        >
          <source src={assets.hero_video} type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Smart Real Estate Investments<br/>
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Build Your Legacy
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Partner with experts to unlock premium property opportunities and create generational wealth
          </p>
          <Link
            to="/login"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold rounded-full hover:shadow-xl transition-all hover:scale-105 group"
          >
            <span>Start Investing Now</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Why Smart Investors Choose Us
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Premium access to curated real estate opportunities with exceptional returns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: faHandHoldingDollar,
                title: "Premium Returns",
                desc: "Average 15-25% annual returns through strategic acquisitions"
              },
              { 
                icon: faChartLine,
                title: "Growth Focused",
                desc: "Properties selected for long-term appreciation potential"
              },
              { 
                icon: faLandmark,
                title: "Diversified Portfolio",
                desc: "Access to residential, commercial, and land investments"
              },
              { 
                icon: faUsers,
                title: "Expert Network",
                desc: "Guidance from industry veterans with 20+ years experience"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className="text-4xl mb-6 text-blue-600 bg-blue-50 p-4 rounded-xl" 
                />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.esc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Explore Investment Opportunities
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Diversify your portfolio with our carefully vetted property selections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                img: assets.landwithmoney,
                title: "Land Investment",
                desc: "Secure prime development land in growth corridors",
                returns: "18-30% ROI"
              },
              { 
                img: assets.flat2,
                title: "Luxury Apartments",
                desc: "Premium residential developments in urban centers",
                returns: "12-18% ROI"
              },
              { 
                img: assets.house,
                title: "Villa Communities",
                desc: "Exclusive gated communities with premium amenities",
                returns: "15-22% ROI"
              },
              { 
                img: assets.logo_nav,
                title: "REITs",
                desc: "Real Estate Investment Trusts for passive income",
                returns: "8-12% ROI"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform" 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                    {item.returns}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.desc}</p>
                  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Explore Opportunities
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Trusted by Investors Worldwide</h2>
          <p className="text-gray-300 mb-16 max-w-2xl mx-auto">Join our growing community of savvy real estate investors</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: faUsers, start: 50, end: 101, label: "Active Investors" },
              { icon: faChartLine, start: 30, end: 92, label: "Annual ROI Average" },
              { icon: faLandmark, start: 10, end: 160, label: "Total investers" },
              { icon: faBuilding, start: 5, end: 40, label: "Indian Locations" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <FontAwesomeIcon icon={item.icon} className="text-4xl mb-4 text-amber-400" />
                <div className="text-3xl font-bold mb-2">
                  {isInView ? (
                    <CountUp 
                      start={item.start} 
                      end={item.end} 
                      duration={3} 
                      suffix={item.label === "Annual ROI Average" ? "%" : "+"} 
                    />
                  ) : item.start}
                </div>
                <p className="text-gray-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;