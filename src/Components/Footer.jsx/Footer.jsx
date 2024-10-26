import React from 'react';
import Fb from "../../Albums/social-media.png";
import twitter from "../../Albums/twitter.png";
import Insta from "../../Albums/instagram.png";
import LinkedIn from "../../Albums/linkedin.png";
import SendArrow from "../../Albums/right-arrow.png";

const Footer = () => {
    return (
        <div className="bg-blue-800 py-6">
            {/* Logo and the Follow Us Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8">
                {/* Logo Section */}
                <div className="text-white font-sans text-3xl mb-4 sm:mb-0">
                    Logo
                </div>

                {/* Follow Us Section */}
                <div className="flex items-center">
                    <span className="mr-4 text-white text-lg">Follow Us</span>
                    <div className="flex space-x-4">
                        <img src={Fb} alt="Facebook Icon" className="w-8 h-8 rounded-full filter brightness-0 invert" />
                        <img src={twitter} alt="Twitter Icon" className="w-8 h-8 rounded-full filter brightness-0 invert" />
                        <img src={Insta} alt="Instagram Icon" className="w-8 h-8 rounded-full filter brightness-0 invert" />
                        <img src={LinkedIn} alt="LinkedIn Icon" className="w-8 h-8 rounded-full filter brightness-0 invert" />
                    </div>
                </div>
            </div>

            {/* Fine Line Separator */}
            <div className="border-t border-white opacity-20 mt-8"></div>

            {/* Grid for Subscribe and Other Sections */}
            <div className="px-4 sm:px-8 mt-6 grid grid-cols-2 md:grid-cols-8 gap-4">
                {/* Subscribe Section */}
                <div className="col-span-2">
                    <div className="text-lg font-semibold mb-2 text-white">Subscribe</div>
                    <div className="mb-4 flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-white"
                        />
                        <button className="ml-2 bg-blue-600 text-black-600 px-4 py-2 flex justify-center rounded-3xl ">
                            <span className='text-xl text-white'>Send</span><img src={SendArrow} alt="Send Arrow" className="w-8 h-8 rounded-full filter brightness-0 invert" />

                        </button>
                    </div>
                    {/* seprator */}
                    <div className="border-t border-white opacity-20 mt-8"></div>
                    <div className='text-white mt-10'>
                        <p>Subscribe to our newsletter to receive our weekly feed.</p>
                    </div>
                </div>

                {/* Space Column */}
                <div className="hidden md:block col-span-2"></div>

                {/* Remaining Sections */}
                <div className="col-span-1">
                    <div className="font-semibold text-white opacity-50 text-xl">Discover</div>
                    <ul className="space-y-3 mt-5 text-gray-300 text-xl gap-4">
                        <li>Miami</li>
                        <li>New York</li>
                        <li>Chicago</li>
                        <li>Florida</li>
                        <li>Los Angeles</li>
                        <li>San Diego</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <div className="font-semibold  text-white opacity-50 text-xl">Quick Links</div>
                    <ul className="space-y-3 mt-5 text-gray-300 text-xl gap-4">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>FAQ's</li>
                        <li>Why Choose Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <div className="font-semibold  text-white opacity-50 text-xl">Contact Us</div>
                    <ul className="space-y-3 mt-5 text-gray-300 text-xl gap-4">
                        <p>info@vendisubito.com</p>
                        <p>+39 06 45441909</p>
                    </ul>
                </div>
                <div className="col-span-1 ">
                    <div className="font-semibold  text-white opacity-50 text-lg">Our Address</div>
                    <ul className="space-y-3 mt-5 text-gray-300 text-xl gap-4">
                        <p>Via Giovanni de Calvi</p>
                        <p>65,00151 Roma Italy</p>
                    </ul>
                </div>
            </div>
            <div className="border-t border-white opacity-20 mt-8"></div>
            <div className='flex justify-center'>
                <p className="text-lg text-white">Copyright © 2024, Immobil System.</p>
            </div>
        </div>
    );
}

export default Footer;
