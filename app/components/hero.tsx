import React from 'react';
import ProfilePic from "../../public/profile.png";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="w-full pt-24 bg-white">
            {/* split content */}
            <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left side content */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase">
                            Sakti Pardano
                        </h1>
                        <p className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                            Software Developer | Full Stack Developer | UI Designer
                        </p>
                    </div>

                    <p className="text-gray-600 text-base md:text-gray-900 leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <a href="#selected-projects" className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.008 1.24l.885 1.77a2.25 2.25 0 0 0 2.007 1.24h1.98a2.25 2.25 0 0 0 2.007-1.24l.885-1.77a2.25 2.25 0 0 1 2.007-1.24h3.86m-18 0h18a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v4.5m18 3V19.5A2.25 2.25 0 0 1 19.5 21.75h-15a2.25 2.25 0 0 1-2.25-2.25V13.5" />
                            </svg>
                            See My Projects
                        </a>
                        <a href="/resume.pdf" download="Sakti_Pardano_Resume.pdf" className="flex items-center gap-2 border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                            Download My Resume
                        </a>
                    </div>
                </div>

                {/* Right side content */}
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <div className="relative bg-[#6B7280] w-full max-w-[540px] min-h-[360px] rounded-[40px] p-8 overflow-visible shadow-sm">
                        <div className="flex flex-col justify-center gap-4 h-full">
                            {/* Stat Box 1 */}
                            <div className="border border-white/40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white w-40">
                                <h3 className="text-3xl font-bold">5</h3>
                                <p className="text-xs text-white/80 font-medium mt-1 leading-tight">years of Experience</p>
                            </div>

                            {/* Stat Box 2 */}
                            <div className="border border-white/40 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white w-40">
                                <h3 className="text-3xl font-bold">20+</h3>
                                <p className="text-xs text-white/80 font-medium mt-1 leading-tight">Apps Development Projects</p>
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className='absolute bottom-0 right-4 w-[280px] md:w-[320px] h-[115%] z-20 pointer-events-none'>
                            <Image 
                                src={ProfilePic}
                                alt="Hero Image" 
                                fill
                                className="object-contain object-bottom"
                                priority 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Core Skills Bar */}
            <div className="border-t border-b border-gray-200 mt-12 bg-white">
                <div className="max-w-7xl mx-auto px-8 md:px-8 py-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">

                    {/* Backend */}
                    <div className='flex flex-col items-center space-y-3'>
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" aria-hidden="true" fill="currentColor">
                                <path d="M4 6h16v2H4V6zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm0 4h10v2H4v-2z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg text-black">Backend</h4>
                        <p className="text-xs text-gray-600 max-w-[180px]">PHP, Python, Node JS, Next JS</p>
                    </div>

                    {/* Frontend */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" aria-hidden="true" fill="currentColor">
                                <path d="M4 5h16v12H4V5zm2 2v8h12V7H6zm-2 12h16v2H4v-2z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg text-black">Frontend</h4>
                        <p className="text-xs text-gray-600 max-w-[180px]">Vue, Angular, HTML5, Tailwind</p>
                    </div>

                    {/* Design */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" aria-hidden="true" fill="currentColor">
                                <path d="M7 16l-1 3 3-1 9-9-2-2-9 9zm12-10.5l1.5 1.5L15 9l-1.5-1.5L19 5.5z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg text-black">Design</h4>
                        <p className="text-xs text-gray-600 max-w-[180px]">Prototyping, UI Design, Coded UI</p>
                    </div>

                    {/* Project Management */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-gray-500" aria-hidden="true" fill="currentColor">
                                <path d="M5 5h14v2H5V5zm0 4h14v10H5V9zm2 2v6h10v-6H7z" />
                            </svg>
                        </div>
                        <h4 className="font-bold text-lg text-black">Project Management</h4>
                        <p className="text-xs text-gray-600 max-w-[180px]">Agile, task management, scheduling, etc</p>
                    </div>                

                </div>
            </div>
        </section>
    )
}