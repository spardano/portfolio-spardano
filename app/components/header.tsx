import React from 'react';
export default function Header() {
    return (
        <header className="w-full bg-white/70 backdrop-blur-md py-6 fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
                {/* Empty spaces or logo placeholder */}
                <div className="w-10 h-6"></div>
                {/* Navigation links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                <a href="#hero" className="hover:text-black transition-colors">Home</a>
                <a href="#services" className="hover:text-black transition-colors">Services</a>
                <a href="#skills" className="hover:text-black transition-colors">Skills</a>
                <a href="#experience" className="hover:text-black transition-colors">Experience</a>
                <a href="#credentials" className="hover:text-black transition-colors">Credentials</a>
                <a href="#selected-projects" className="hover:text-black transition-colors">Selected Projects</a>
                <a href="#find-me" className="hover:text-black transition-colors">Find Me</a>

                {/* CTA button */}
                {/* <a
                    href="https://wa.me/082283443050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition-colors"
                >
                    Chat on WhatsApp
                </a> */}
            </nav>
            </div>
        </header>
    )
}