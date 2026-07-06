'use client';
import React from 'react';
import { useLanguage } from '../src/context/LanguageContext';
export default function Header() {

    const { lang, setLang, t } = useLanguage();

    return (
        <header className="w-full bg-white/70 backdrop-blur-md py-6 fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
                {/* Brand name on the left side */}
                <div className="text-xl md:text-2xl font-black text-black tracking-tight">
                    Dano.
                </div>
                {/* Navigation links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                <a href="#hero" className="hover:text-black transition-colors">Home</a>
                <a href="#services" className="hover:text-black transition-colors">Services</a>
                <a href="#skills" className="hover:text-black transition-colors">Skills</a>
                <a href="#experience" className="hover:text-black transition-colors">Experience</a>
                <a href="#credentials" className="hover:text-black transition-colors">Credentials</a>
                <a href="#selected-projects" className="hover:text-black transition-colors">Selected Projects</a>
                <a href="#find-me" className="hover:text-black transition-colors">Find Me</a>

                {/* Clean Language Toggle Switch Pill */}
                <div className="flex items-center bg-gray-100 p-1 rounded-full border border-gray-200 text-xs font-bold shadow-inner ml-4">
                    <button
                    type="button"
                    onClick={() => setLang('en')}
                    className={`px-3 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                    EN
                    </button>
                    <button
                    type="button"
                    onClick={() => setLang('id')}
                    className={`px-3 py-1 rounded-full transition-all ${lang === 'id' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                    ID
                    </button>
                </div>

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