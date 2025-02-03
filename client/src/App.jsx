import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { matchPath, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Review from './pages/Review'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Sidebar from './components/Sidebar'
import ScrollToTop from './components/ScrollToTop'
import MyTransaction from './pages/MyTransaction'
import { ToastContainer, toast } from "react-toastify";
import ForgetPassword from './pages/ForgetPassword'
import ChangePassword from './pages/ChangePassword'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "₹";

const App = () => {
  const location = useLocation();
  const hideNavFooterPaths = ["/login", "/reset-password"];
  const isChangePasswordPage = matchPath("/user/reset-password/:id/:token", location.pathname);

  const shouldHideNavFooter = hideNavFooterPaths.includes(location.pathname) || isChangePasswordPage;
  return (
    <div>
      {!shouldHideNavFooter && <Navbar />}
      {!shouldHideNavFooter && <Sidebar />}
      <ScrollToTop />
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/reset-password' element={<ForgetPassword />} />
        <Route path='/user/reset-password/:id/:token' element={<ChangePassword />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/team' element={<Team />} />
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-transaction' element={<MyTransaction />} />
      </Routes>
      {!shouldHideNavFooter && <Footer />}
    </div>
  )
}

export default App