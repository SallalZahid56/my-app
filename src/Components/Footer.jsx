import React from 'react';
import {
    FaWhatsapp,
    FaInstagram,
    FaEnvelope,
    FaLinkedin,
} from 'react-icons/fa';
import footerBg from '../assets/foter.png';

const Footer = () => {
    return (
        <footer className="relative text-white rounded-t-[70px] overflow-hidden">
            {/* Full Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#192962] to-[#2241B0] z-0"></div>

            {/* Overlay Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
                style={{
                    backgroundImage: `url(${footerBg})`,
                }}
            ></div>

            {/* Content Wrapper */}
            <div className="relative z-10">
                {/* Top Section */}
                <div className="h-[500px] flex items-center justify-center text-center px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                            Start your new project with <br /> us in just a few clicks
                        </h2>
                        <p className="text-gray-200 text-sm md:text-base mb-6">
                            For scheduling meetings or WhatsApp inquiries, contact us anytime. <br />
                            We typically respond within 1–2 hours during business hours and within 8–10 hours outside these hours.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex justify-center gap-4 flex-wrap">
                            <button className="bg-[#223FA8] text-white border border-white rounded-md px-6 py-3 uppercase text-xs tracking-wide font-semibold h-11">
                                Get Started
                            </button>
                            <button className="bg-[#223FA8] text-white border border-white rounded-md px-6 py-3 uppercase text-xs tracking-wide font-semibold h-11">
                                Message Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="rounded-t-[70px] -mt-[70px] px-4 py-6">
                    <div className="container mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-4">
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <a href="#howItWorks" className="hover:text-white">How it works</a>
                                <a href="#membershipBenefits" className="hover:text-white">Benefits</a>
                                <a href="#services" className="hover:text-white">Services</a>
                                <a href="#pricing" className="hover:text-white">Pricing</a>
                                <a href="#reviews" className="hover:text-white">Reviews</a>
                                <a href="#faq" className="hover:text-white">FAQs</a>
                            </div>

                            <div className="flex gap-4 text-white text-lg">
                                <a href="#"><FaWhatsapp /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaEnvelope /></a>
                                <a href="#"><FaLinkedin /></a>
                            </div>
                        </div>

                        <hr className="my-6 border-t border-white/20" />

                        <div className="text-center text-gray-400 text-xs">
                            &copy; Taskubar 2025. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
