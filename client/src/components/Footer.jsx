import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#222] text-white py-16 px-6 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                {/* Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-lg font-semibold border-b-2 border-orange-500 pb-2 mb-4 uppercase">Quick Links</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="hover:text-orange-400 transition">Home</Link>
                        <Link to="/about" className="hover:text-orange-400 transition">About</Link>
                        <Link to="/team" className="hover:text-orange-400 transition">Our Team</Link>
                        <Link to="/reviews" className="hover:text-orange-400 transition">Reviews</Link>
                        <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-lg font-semibold border-b-2 border-orange-500 pb-2 mb-4 uppercase">Contact Info</h1>
                    <div className="flex flex-col gap-3 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-orange-400" />
                            <p className="max-w-xs">Bhagirath Bhawan 1st Floor, NH2 Barkattha Road, Tuio, Hazaribagh, Jharkhand, India 825323</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-orange-400" />
                            <p>+91 7543070095</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-orange-400" />
                            <p>infothemsukfunds@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-lg font-semibold border-b-2 border-orange-500 pb-2 mb-4 uppercase">Follow Us</h1>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-orange-400 transition"><Facebook size={28} /></a>
                        <a href="#" className="hover:text-orange-400 transition"><Twitter size={28} /></a>
                        <a href="#" className="hover:text-orange-400 transition"><Linkedin size={28} /></a>
                        <a href="https://www.instagram.com/themsukfunds/" className="hover:text-orange-400 transition"><Instagram size={28} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-4 border-t border-gray-600 text-center text-xs">
                <p>© 2025 Real Estate Investments. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
