import React from 'react';
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
  tags: string[];
  imageSrc?: string;
}

export default function SelectedProjects() {
  const projectData: Project[] = [
    {
      title: "SBG Mobile",
      description: "Super-app yang integrasi berbagai layanan administrasi publik dalam sebuah aplikasi",
      tags: ["Flutter", "Geolocation", "API"],
    },
    {
      title: "Vocality",
      description: "Aplikasi yang mengimplemenntasikan Machine Learning untuk melatih dan mengevaluasi vokal",
      tags: ["Swift", "iOS", "Core ML"],
    },
    {
      title: "Comano",
      description: "Apliasi iPAD untuk membantu pengguna melatih verbal untuk kebutuhan public speaking",
      tags: ["Swift", "AI", "AVFoundation", "MotionCapture"],
    },
    {
      title: "TravelGO Web",
      description: "Aplikasi pembelian tiket transportasi antar-provinsi yang terintegrasi payment gateway dan geolocation",
      tags: ["Payment Gateway", "Laravel", "Filament", "Vue"],
    },
    {
      title: "Emoci",
      description: "Aplikasi teman curhat aman dan privat yang menginkorporasi Gemini AI.",
      tags: ["Swift", "iOS", "AI"],
    },
    {
      title: "JasaRekber Mobile",
      description: "Aplikasi rekening bersama, memberikan wadah aman untuk pembeli dan penjual bertransaksi.",
      tags: ["Ionic", "Angular", "Restful-API", "Firebase"],
    },
    {
      title: "Sandiwara News Mobile",
      description: "Aplikasi berita yang mengandalkan API publik untuk mendapatkan berita terbaru.",
      tags: ["Swift", "iOS", "Core ML"],
    },
    {
      title: "Perpustakaan Digital",
      description: "Aplikasi peminjaman koleksi e-book yang dimiliki perpustakaan kota Bukittinggi.",
      tags: ["Swift", "iOS", "AI"],
    },
    {
      title: "TPP Bukittinggi",
      description: "Aplikasi penghitungan Tambahan Tunjangan Pegawai (TPP) yang terintegrasi presensi.",
      tags: ["Swift", "iOS", "AI"],
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
              className="relative w-full h-[360px] md:h-[380px] bg-[#737373] rounded-[24px] overflow-hidden group cursor-pointer
                         transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-md"
            >
              {/* Thumbnail Image Render Space */}
              {project.imageSrc && (
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
    </section>
  );
}