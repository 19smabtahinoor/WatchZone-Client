import React from 'react';
import Brand from '../Navbar/Brand';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content text-sm font-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto place-items-center py-12">
                <div className="flex flex-col space-y-2">
                    <Brand />
                    <p>WatchZone Ltd</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="footer-title">Services</span>
                    <span>Branding</span>
                    <span>Design</span>
                    <span>Marketing</span>
                    <span>Advertisement</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="footer-title">Company</span>
                    <span>About us</span>
                    <span>Contact</span>
                    <span>Jobs</span>
                    <span>Press kit</span>
                </div>
                <div className="flex flex-col space-y-2">
                    <span className="footer-title">Info</span>
                    <span>Legal</span>
                    <span>Terms of use</span>
                    <span>Privacy policy</span>
                    <span>Cookie policy</span>
                </div>
           </div>

            <div className="flex items-center justify-center border-t border-gray-300 py-4">
                <p>Copyright © 2021 - Developed by 💘 S.M.Abtahi Noor</p>
            </div>
        </footer>
    )
}

export default Footer
