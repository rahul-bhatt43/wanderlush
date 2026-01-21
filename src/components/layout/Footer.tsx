import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { AnimatedButton } from '../ui/AnimatedButton';

export const Footer = () => {
    return (
        <footer className="bg-[#191514] text-white pt-20 pb-10 px-8 md:px-24 mt-auto">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-20">
                    {/* Column 1 - About */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-semibold">About</h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">In Press</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    {/* Column 2 - Support */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-semibold">Support</h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Contact us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Online Chat</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Whatsapp</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Ticketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Call Center</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - FAQ */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-semibold">FAQ</h4>
                        <ul className="flex flex-col gap-4 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Booking</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Payments</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Newsletter */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-semibold">Newsletter</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Don't miss out on the exciting world of travel - subscribe now and embark on a journey of discovery with us.
                        </p>

                        <div className="relative mt-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-[#1c1c1c] border border-gray-800 rounded-full py-3.5 pl-12 pr-28 text-sm text-white focus:outline-none focus:border-gray-400 transition-colors placeholder:text-gray-500"
                            />
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gray-500 hover:bg-gray-400 text-white px-6 rounded-full text-xs font-semibold transition-colors">
                                Submit
                            </button>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center hover:bg-gray-400 transition-colors text-white">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center hover:bg-gray-400 transition-colors text-white">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center hover:bg-gray-400 transition-colors text-white">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-8">
                    <p className="text-gray-400 text-sm"> &#169; {new Date().getFullYear()} Wanderlush, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
