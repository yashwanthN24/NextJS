import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="mt-4">
                    <a href="/privacy" className="text-blue-400 hover:underline mx-2 text-sm">Privacy Policy</a>
                    <a href="/terms" className="text-blue-400 hover:underline mx-2 text-sm">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
