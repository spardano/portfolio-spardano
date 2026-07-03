import React from 'react';

// 1. Structure template for each work history item
interface ExperienceItem {
  duration: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

export default function Experience() {
  // 2. Your experience loop data array
  const experienceData: ExperienceItem[] = [
    {
      duration: "10 Months",
      period: "Mar 2025 - Dec 2025",
      role: "iOS Developer",
      company: "Apple Developer Academy @ Infinite Learning Batam",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      duration: "4 years",
      period: "Feb 2021 - Dec 2024",
      role: "Full-Stack Developer",
      company: "Dinas Komunikasi dan Informatika Kota Bukittinggi",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      duration: "3 Months",
      period: "Oct 2020 - Dec 2020",
      role: "Junior Developer",
      company: "The Big Rich Company Indonesia, South Jakarta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <section id="experience" className="w-full bg-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-black text-black mb-12 tracking-tight">
          Experience
        </h2>

        {/* Experience Rows Container */}
        <div className="divide-y divide-gray-300 border-t border-gray-300">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-10 items-start
                         transition-all duration-300 ease-out origin-left
                         hover:scale-[1.01] cursor-default"
            >
              {/* Column 1: Duration & Dates */}
              <div className="md:col-span-3 space-y-1">
                <h3 className="text-2xl font-black text-black tracking-tight">
                  {exp.duration}
                </h3>
                <p className="text-sm md:text-sm text-gray-500 font-medium">
                  {exp.period}
                </p>
              </div>

              {/* Column 2: Role & Company Name */}
              <div className="md:col-span-4 space-y-1">
                <h3 className="text-2xl font-black text-black tracking-tight">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-600 font-medium">
                  {exp.company}
                </p>
              </div>

              {/* Column 3: Job Description Text */}
              <div className="md:col-span-5">
                <p className="text-black text-sm md:text-base leading-relaxed text-justify md:text-left">
                  {exp.description}
                </p>
              </div>

            </div>
          ))}
          {/* Subtle bottom line to close off the final row cleanly */}
          <div className="border-b border-gray-300"></div>
        </div>

      </div>
    </section>
  );
}