import React from 'react';

export default function Credentials() {
  // Array data for the certifications list to keep code clean
  const certifications = [
    { title: "Project Management Proffesional", provider: "Google Coursera | 2025" },
    { title: "Learn SOLID Programming Principles", provider: "Dicoding | 2022" },
    { title: "Architecting on AWS", provider: "Dicoding | 2022" },
    { title: "Cloud Practitioner Essentials", provider: "Dicoding | 2022" },
    { title: "Learning basic of Python", provider: "Dicoding | 2022" },
  ];

  return (
    <section id="credentials" className="w-full bg-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-black text-black tracking-tight">
          Credentials
        </h2>

        {/* Responsive 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Education */}
          <div className="bg-[#F3F4F6] rounded-[24px] p-8 flex flex-col space-y-6 transition-transform hover:-translate-y-1 duration-200">
            <h3 className="text-xl font-bold text-black tracking-tight">
              Education
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-bold text-sm md:text-base text-black">
                  Apple Developer Academy @ Infinite Learning
                </h4>
                <p className="text-xs md:text-sm text-gray-600">Feb 2025 - Dec 2025</p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-bold text-sm md:text-base text-black">
                  Bachelor Degree of Informatics Engineering
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  UIN SUSKA University | July 2013 - July 2019 | 3.60 GPA
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Certification and Training */}
          <div className="bg-[#F3F4F6] rounded-[24px] p-8 flex flex-col space-y-6 transition-transform hover:-translate-y-1 duration-200">
            <h3 className="text-xl font-bold text-black tracking-tight">
              Certification and Training
            </h3>
            
            {/* Dynamic list loop */}
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-bold text-sm md:text-base text-black">
                    {cert.title}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-600">{cert.provider}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Language */}
          <div className="bg-[#F3F4F6] rounded-[24px] p-8 flex flex-col space-y-6 transition-transform hover:-translate-y-1 duration-200">
            <h3 className="text-xl font-bold text-black tracking-tight">
              Language
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <h4 className="font-bold text-sm md:text-base text-black">English</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Intermediate, I could speak, read and write in English
                </p>
              </div>
              
              <div className="space-y-1">
                <h4 className="font-bold text-sm md:text-base text-black">Indonesia</h4>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  Native, Duhh
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}