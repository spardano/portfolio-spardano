'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import sbhImage from '../../public/selectedProjects/sbh.png';
import vocalityImage from '../../public/selectedProjects/vocality.png';
import comanoImage from '../../public/selectedProjects/comano.png';
import travelgoImage from '../../public/selectedProjects/travelgo.png';
import emociImage from '../../public/selectedProjects/emoci.png';
import jasarekberImage from '../../public/selectedProjects/jasarekber.png';
import sandiwaraImage from '../../public/selectedProjects/sandiwara.png';
import pusdigiImage from '../../public/selectedProjects/pusdigi.png';
import tppImage from '../../public/selectedProjects/tpp.png';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  myRoleDescription: string;
  teams?: string[];
  year: number;
  institution: string;
  linkToGithub?: string;
  linkToURL?: string;
}

export default function SelectedProjects() {

  // State to track which project is active in the modal
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projectData: Project[] = [
    {
      title: "SBG Mobile",
      description: "Super-app unifying multiple public administration services into a single platform, built for Bukittinggi's Smart City initiative.",
      longDescription: "SBG (Sistem Bukittinggi Gemilang) is a Smart City initiative that consolidates multiple public services into one mobile app. It serves three user types with distinct feature sets: visitors get access to tourism and shopping information across Bukittinggi; residents can handle civil administration, social assistance distribution, and permit applications; and government employees get attendance tracking, e-office access, and performance monitoring. All features integrate with public and internal city government APIs, built on Flutter, Laravel, and Vue for a scalable mobile and web experience.",
      tags: ["Flutter", "Geolocation", "API", "Push Notification"],
      myRoleDescription: "Architected the mobile app structure in Flutter, integrated public and internal government APIs, and implemented geolocation, push notifications, and state management. Built offline-first support for the attendance and tourism modules to handle low-connectivity conditions.",
      year: 2024,
      institution: "Bukittinggi City Government - Department of Communication and Informatics",
      linkToURL: "https://play.google.com/store/search?q=sistem+bukittinggi+gemilang&c=apps&hl=id",
      linkToGithub: "https://github.com/spardano/sbg-mobile"
    },
    {
      title: "Vocality",
      description: "Vocal training app using Core ML to evaluate and coach users' singing and speaking technique in real time.",
      longDescription: "Vocality helps users improve vocal quality using a machine learning model that analyzes pitch, timing, and intonation in real time.",
      tags: ["iOS", "Swift", "Core ML", "Apple Intelligence"],
      myRoleDescription: "Built the vocal evaluation engine, integrated the Core ML model for real-time pitch and timing analysis, and developed the interactive practice UI for guided vocal exercises.",
      year: 2025,
      institution: "Apple Developer Academy @ Infinite Learning Batam",
      linkToGithub: "https://github.com/stpimm/Vocality",
    },
    {
      title: "Comano",
      description: "iPad app that helps users train public speaking skills through guided verbal practice and feedback.",
      longDescription: "Comano is an educational iPad app that supports public speaking practice with audio, text, and visual feedback to help users refine pronunciation and delivery.",
      tags: ["iPad", "Swift",  "Core Data", "Sound Analysis"],
      myRoleDescription: "Built the audio-video recording module, implemented movement and gesture analysis using Sound Analysis, and developed the instant feedback rendering system with Core Data for local storage.",
      year: 2025,
      institution: "Apple Developer Academy @ Infinite Learning Batam",
      linkToURL: "https://apps.apple.com/id/app/comano-public-speaking-coach/id6747808692?l=id",
      linkToGithub: "https://github.com/SOLID-Comano/ComanoFinal"
    },
    {
      title: "TravelGO Web",
      description: "Inter-province transport ticketing platform with integrated payment gateway and geolocation, built in Laravel and Vue.",
      longDescription: "TravelGO Web lets users book inter-city transport tickets with price comparison, departure tracking, and integrated payment processing in a single platform.",
      tags: ["Payment Gateway", "Laravel", "Filament", "Vue"],
      myRoleDescription: "Built the Laravel backend including ticket data management and payment gateway integration, and developed the Vue-based frontend for booking and tracking flows.",
      year: 2022,
      institution: "PT Travel Digital",
      linkToURL: "https://travelgo.example.com",
    },
    {
      title: "Emoci",
      description: "A private, AI-powered journaling companion integrated with Gemini AI — a safe space to process emotions.",
      longDescription: "Emoci is a private AI conversation platform that helps users express emotions, save reflection drafts, and keep their data secure.",
      tags: ["Swift", "iOS", "AI"],
      myRoleDescription: "Implemented the secure chat flow with local encryption for user data, and integrated the Gemini AI API to generate context-aware emotional support responses.",
      year: 2024,
      institution: "Startup Kesehatan Mental",
    },
    {
      title: "JasaRekber Mobile",
      description: "Escrow app that gives buyers and sellers a secure, mediated space to complete online transactions.",
      longDescription: "JasaRekber Mobile provides a shared escrow account for buy-sell transactions, with third-party verification and transparent transaction tracking.",
      tags: ["Ionic", "Angular", "Restful-API", "Firebase"],
      myRoleDescription: "Built the frontend in Ionic/Angular, including transaction status flows and real-time notifications powered by Firebase, and integrated the RESTful API for escrow verification.",
      year: 2022,
      institution: "PT Fintech Nusantara",
      linkToGithub: "https://github.com/spardano/jasarekber",
    },
    {
      title: "Sandiwara News Mobile",
      description: "News app pulling from public APIs to deliver up-to-date headlines in a clean mobile reading experience.",
      longDescription: "Sandiwara News Mobile aggregates daily news summaries from multiple sources, with bookmarking and topic-based notifications.",
      tags: ["Swift", "iOS", "Core ML"],
      myRoleDescription: "Designed the adaptive news feed and topic filtering logic, and built a Core ML-based recommendation system to surface articles matching user reading patterns.",
      year: 2023,
      institution: "Media Digital Lokal",
    },
    {
      title: "Perpustakaan Digital",
      description: "E-book lending app for Bukittinggi's city library, letting residents borrow digital collections remotely.",
      longDescription: "Perpustakaan Digital provides an e-book catalog with borrowing and return tracking through a user-friendly mobile interface.",
      tags: ["Swift", "iOS", "AI"],
      myRoleDescription: "Led development of the catalog system and user authentication, and built a preference-based book recommendation engine.",
      year: 2024,
      institution: "Perpustakaan Kota Bukittinggi",
      linkToURL: "https://perpusdigital.example.com",
    },
    {
      title: "TPP Bukittinggi",
      description: "Employee incentive (TPP) calculation app integrated with attendance data for accurate, automated payouts.",
      longDescription: "TPP Bukittinggi automatically calculates employee incentives based on attendance and performance data, with transparent reporting.",
      tags: ["Swift", "iOS", "AI"],
      myRoleDescription: "Designed the incentive calculation logic, integrated attendance data pipelines, and built the employee-facing reporting views.",
      year: 2024,
      institution: "Pemerintah Kota Bukittinggi",
    }
  ];

  const imageMap: { [key: string]: StaticImageData } = {
    "SBG Mobile": sbhImage,
    "Vocality": vocalityImage,
    "Comano": comanoImage,
    "TravelGO Web": travelgoImage,
    "Emoci": emociImage,
    "JasaRekber Mobile": jasarekberImage,
    "Sandiwara News Mobile": sandiwaraImage,
    "Perpustakaan Digital": pusdigiImage,
    "TPP Bukittinggi": tppImage
  };

  return (
    <section id="selected-projects" className="w-full bg-white py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-black text-black tracking-tight">
          Selected Projects
        </h2>

        {/* Responsive Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <div 
              key={index}
              onClick={() => setActiveProject(project)}
              className="relative w-full h-[360px] md:h-[380px] bg-[#737373] rounded-[24px] overflow-hidden group cursor-pointer
                         transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md"
            >
              {/* Thumbnail Image Render Space */}
              {imageMap[project.title] && (
                <Image 
                  src={imageMap[project.title]}
                  alt={project.title} 
                  fill 
                  className="object-cover"
                />
              )}

              {/* Dark Gradient Overlay Container */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 flex flex-col justify-between p-6 md:p-8">
                
                {/* Top Row: Tech Tags (Max 4 across) */}
                <div className="flex flex-wrap gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                  {project.tags.slice(0, 4).map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="bg-white/15 backdrop-blur-sm text-white border border-white/20 rounded-lg px-2 py-1 text-[11px] font-medium tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Row: Content Block */}
                <div className="space-y-2 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                  <h3 className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Fixed 2-Line Clamped Description */}
                  <p className="text-gray-300 text-xs md:text-sm leading-relaxed line-clamp-2 font-normal">
                    {project.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= DETAILED MODAL OVERLAY ================= */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setActiveProject(null)} // Close modal when clicking backdrop area
        >
          {/* Medium Size Modal Container */}
          <div 
            className="bg-white w-full max-w-2xl rounded-[28px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()} // Stop event bubbling so clicking inside doesn't close it
          >
            
            {/* Close Cross Button */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors font-sans text-xs"
            >
              ✕
            </button>

            {/* Modal Image Header Banner */}
            <div className="relative w-full h-[240px] md:h-[280px] bg-[#737373] flex-shrink-0">
              {imageMap[activeProject.title] && (
                <Image 
                  src={imageMap[activeProject.title]} 
                  alt={activeProject.title} 
                  fill 
                  className="object-cover"
                />
              )}
            </div>

            {/* Modal Body Info Container */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-black text-black tracking-tight leading-tight">
                  {activeProject.title}
                </h3>

                

                {/* Shows ALL tech tags cleanly inside modal body */}
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="bg-gray-100 border border-gray-200 text-gray-800 rounded-lg px-2.5 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <span className="bg-gray-100 text-gray-800 rounded-full px-3 py-1 font-semibold">
                    {activeProject.year}
                  </span>
                  <span className="text-sm font-medium">
                    {activeProject.institution}
                  </span>
                </div>
              </div>

              <hr className="border-gray-200" />


              <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                <h4 className="text-base font-semibold text-black">Peran saya</h4>
                <p>{activeProject.myRoleDescription}</p>
              </div>
             

              <hr className="border-gray-200" />

              <div className="text-gray-700 text-sm md:text-base leading-relaxed text-justify space-y-4">
                <h4 className="text-base font-semibold text-black">Ringkasan</h4>
                <p>{activeProject.longDescription}</p>
                <p>{activeProject.description}</p>
              </div>

              <hr className="border-gray-200" />

              {activeProject.teams?.length ? (
                  <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                    <h4 className="text-base font-semibold text-black">Tim</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.teams.map((team, teamIdx) => (
                        <span
                          key={teamIdx}
                          className="bg-black text-white rounded-full px-3 py-1 text-xs font-semibold"
                        >
                          {team}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

              {(activeProject.linkToGithub || activeProject.linkToURL) && (
                <div className="flex flex-row gap-3">
                  {activeProject.linkToURL && (
                    <a
                      href={activeProject.linkToURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit project"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white text-black transition-colors hover:bg-gray-100"
                    >
                      <svg className="h-5 w-5" width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.967 8.193L5 13h3v6h4v-6h3L9.967 8.193zM18 1H2C.9 1 0 1.9 0 3v12c0 1.1.9 2 2 2h4v-2H2V6h16v9h-4v2h4c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM2.5 4.25a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm2 0a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM18 4H6V3h12.019L18 4z"/>
                      </svg>
                    </a>
                  )}
                  {activeProject.linkToGithub && (
                    <a
                      href={activeProject.linkToGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black bg-white text-black transition-colors hover:bg-gray-100"
                    >
                      <svg className="h-5 w-5" width="18" height="18"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6713 2.62664C18.5628 2.36483 18.3534 2.16452 18.0959 2.07627L18.094 2.07564L18.0922 2.07501L18.0884 2.07374L18.0805 2.07114L18.0636 2.06583C18.0518 2.06223 18.039 2.05856 18.0252 2.05487C17.9976 2.04749 17.966 2.04007 17.9305 2.03319C17.8593 2.01941 17.7728 2.00787 17.6708 2.00279C17.466 1.99259 17.2037 2.00858 16.8817 2.08054C16.3447 2.20053 15.6476 2.47464 14.7724 3.03631C14.7152 3.07302 14.6572 3.11096 14.5985 3.15016C14.5397 3.13561 14.4809 3.12155 14.422 3.108C12.8261 2.74083 11.1742 2.74083 9.57825 3.108C9.51933 3.12156 9.46049 3.13561 9.40173 3.15017C9.34298 3.11096 9.28499 3.07302 9.22775 3.03631C8.35163 2.47435 7.65291 2.20029 7.11455 2.08039C6.79179 2.00852 6.52891 1.99262 6.324 2.00278C6.22186 2.00784 6.13536 2.01931 6.06428 2.03299C6.0288 2.03982 5.99732 2.04717 5.96983 2.05447C5.95609 2.05812 5.94336 2.06176 5.93163 2.06531L5.91481 2.07056L5.90698 2.07311L5.9032 2.07437L5.90135 2.07499L5.89952 2.07561C5.63979 2.16397 5.42877 2.36623 5.32049 2.63061C4.91716 3.6154 4.8101 4.70134 5.00435 5.74306C5.01379 5.79367 5.02394 5.84418 5.0348 5.89458C4.99316 5.95373 4.9527 6.01368 4.91343 6.07439C4.30771 7.01089 3.98553 8.12791 4.00063 9.27493C4.00208 11.7315 4.71965 13.4139 5.9332 14.4965C6.62014 15.1093 7.41743 15.4844 8.21873 15.7208C8.31042 15.7479 8.40217 15.7731 8.49381 15.7967C8.48043 15.8432 8.46796 15.8901 8.45641 15.9373C8.40789 16.1357 8.37572 16.3394 8.36083 16.5461C8.35948 16.5648 8.35863 16.5835 8.35829 16.6022L8.32436 18.421L8.32417 18.4407C8.32417 18.4464 8.32417 18.4521 8.32417 18.4577C8.26262 18.473 8.20005 18.4843 8.13682 18.4916C7.942 18.5141 7.74467 18.4977 7.5561 18.4434C7.36752 18.3891 7.19127 18.2979 7.03752 18.1749C6.88377 18.0519 6.75553 17.8994 6.66031 17.7261L6.6505 17.7087C6.38836 17.2535 6.02627 16.8639 5.59142 16.5695C5.15656 16.275 4.6604 16.0836 4.14047 16.0099C3.59365 15.9324 3.08753 16.3128 3.01002 16.8597C2.93251 17.4065 3.31296 17.9126 3.85978 17.9901C4.07816 18.0211 4.28688 18.1015 4.47012 18.2256C4.65121 18.3482 4.80277 18.5103 4.9134 18.7C5.1346 19.0992 5.43165 19.4514 5.78801 19.7365C6.14753 20.0242 6.56032 20.2379 7.00272 20.3653C7.43348 20.4893 7.88392 20.5291 8.32949 20.4825C8.33039 20.7224 8.33103 20.9065 8.33103 21C8.33103 21.5523 8.75521 22 9.27847 22H14.7558C15.279 22 15.7032 21.5523 15.7032 21V17.2095C15.729 16.7802 15.685 16.3499 15.5738 15.9373C15.5585 15.8805 15.5419 15.824 15.5241 15.7679C15.5838 15.753 15.6435 15.7373 15.7032 15.7208C16.5277 15.4937 17.3513 15.1224 18.0588 14.4983C19.2791 13.4217 19.9982 11.7379 19.9996 9.27493C20.0147 8.12791 19.6925 7.01089 19.0868 6.07439C19.0475 6.01358 19.007 5.95354 18.9652 5.89429C18.976 5.84399 18.9861 5.79358 18.9955 5.74306C19.1893 4.69934 19.0795 3.61142 18.6713 2.62664Z" fill="#323232"/>
                      </svg>
                    </a>
                  )}
                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </section>
  );
}