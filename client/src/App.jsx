import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Review from './pages/Review'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Sidebar from './components/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import MyTransaction from './pages/MyTransaction'


const App = () => {
  const location = useLocation();
  const hideNavFooter = ['/login'];
  const containerClasses = hideNavFooter.includes(location.pathname) ? '' : 'px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]';
  return (
    <div>
      {!hideNavFooter.includes(location.pathname) && <Navbar />}
      {!hideNavFooter.includes(location.pathname) && <Sidebar />}
      <ScrollToTop />
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-transaction' element={<MyTransaction />} />
      </Routes>
      {!hideNavFooter.includes(location.pathname) && <Footer />}
    </div>
  )
}

export default App