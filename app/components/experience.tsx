'use client';
import React from 'react';
import { useLanguage } from '../src/context/LanguageContext';

// 1. Structure template for each work history item
interface ExperienceItem {
  duration: string;
  durationID?: string;
  period: string;
  role: string;
  company: string;
  description: string;
  descriptionID?: string; 
}

export default function Experience() {

  const { t } = useLanguage();

  // 2. Your experience loop data array
  const experienceData: ExperienceItem[] = [
    {
      duration: "10 Months",
      durationID: "10 Bulan",
      period: "Mar 2025 - Dec 2025",
      role: "iOS Developer",
      company: "Apple Developer Academy @ Infinite Learning Batam",
      description: "Built three iOS apps in Swift/SwiftUI (Jaka, Emoci, Vocality) as lead developer, and served as UI/UX Designer on three more (Comano, Vocality, Tidy-Up with Miko) — running research, usability testing, and prototyping through to coded UI.",
      descriptionID: "Membangun tiga aplikasi iOS menggunakan Swift/SwiftUI (Jaka, Emoci, Vocality) sebagai lead developer, serta berperan sebagai UI/UX Designer pada tiga proyek lainnya (Comano, Vocality, Tidy-Up with Miko) — mulai dari riset, usability testing, hingga prototyping sampai ke coded UI."
    },
    {
      duration: "4 years",
      durationID: "4 Tahun",
      period: "Feb 2021 - Dec 2024",
      role: "Full-Stack Developer",
      company: "Dinas Komunikasi dan Informatika Kota Bukittinggi",
      description: "Led the SBH super-app for Bukittinggi's Smart City initiative — managing cross-team task distribution while working hands-on as mobile developer and database manager. Maintained government-wide systems (Attendance, TPP, Pension Management) and trained staff on new platforms.",
      descriptionID: "Memimpin pengembangan super-app SBH untuk Smart City Bukittinggi, mengatur task distribution lintas tim sambil berperan langsung sebagai mobile developer dan database manager. Menangani maintenance sistem pemerintahan (Attendance, TPP, Pension Management) serta melatih staf pengguna platform baru."
    },
    {
      duration: "3 Months",
      durationID: "3 Bulan",
      period: "Oct 2020 - Dec 2020",
      role: "Junior Developer",
      company: "The Big Rich Company Indonesia, South Jakarta",
      description: "Three-month internship building mobile apps with Ionic, plus bug fixes and feature improvements on Laravel-based web applications.",
      descriptionID: "Magang selama tiga bulan dalam pembuatan aplikasi mobile dengan Ionic, ditambah perbaikan bug dan peningkatan fitur pada aplikasi web berbasis Laravel."
    }
  ];

  return (
    <section id="experience" className="w-full bg-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-black text-black mb-12 tracking-tight">
          {t("Experience", "Pengalaman")}
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
                  {t(exp.duration, exp.durationID ? exp.durationID : exp.duration)}
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
                  {t(exp.description, exp.descriptionID ? exp.descriptionID : exp.description)}
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