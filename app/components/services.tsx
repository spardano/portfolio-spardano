import React from "react";

// typescript structure for service item
interface ServiceItem {
    title: string;
    description: string;
    icon: string;
}

export default function Services() {
    // json data
    const servicesData: ServiceItem[] = [
        {
            title: "Web Development",
            description: "I build responsive and dynamic websites using modern web technologies.",
            icon: "web",
        },
        {
            title: "Mobile App Development",
            description: "I can do cross-platform (Flutter, Ionic), or native (Swift).",
            icon: "mobile",
        },
        {
            title: "UI Design",
            description: "I can work around Figma and Framer; in fact, I designed some projects myself.",
            icon: "design",
        },
        {
            title: "Deployment & Maintenance",
            description: "I know how to deploy websites, set up domains and VPS. And I also can publish Play Store and App Store projects.",
            icon: "deployment",
        },
         {
            title: "Project Management",
            description: "I can manage and lead projects from conception to completion, ensuring timely delivery and quality outcomes.",
            icon: "pm",
        },
    ];

    const getServiceIcon = (type: string) => {
        switch (type) {
            case "web":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                );
            case "mobile":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                );
            case "design":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l9.37-9.37a2.121 2.121 0 1 1 3 3l-9.37 9.37a4.5 4.5 0 0 1-1.397 1.007l-2.64 1.1c-.41.171-.882-.16-1.112-.51a1.125 1.125 0 0 1-.166-.909l.6-2.64A4.5 4.5 0 0 1 9.53 16.12z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75l1.5 1.5M10.5 19.5h9" />
                    </svg>
                );
            case "deployment":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75z" />
                    </svg>
                );
            case "pm":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.3 0A48.536 48.536 0 0 1 12 3.75c.38 0 .757.01 1.13.032M3.75 16.5v2.25A2.25 2.25 0 0 0 6 21h3.75M3.75 16.5a2.25 2.25 0 0 1-2.25-2.25V6.108c0-1.135.845-2.098 1.976-2.192a48.424 48.424 0 0 1 1.123-.08M3.75 16.5h1.5m.75-12h3M3.75 4.5H6m0 10.5V6" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="services" className="w-full bg-white py-16 px-8 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-3xl font-black text-black mb-10 tracking-tight">
                    Services I Offer
                </h2>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <div key={index}
                         className="bg-[#F3F3F6] rounded-[24px] p-8 flex flex-col items-start space-y-4 min-h-[220px] transition-transform hover:-translate-y-1 duration-200">
                           
                            {/* Duff black circle with relevant icon */}
                            <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center flex-shrink-0">
                                {getServiceIcon(service.icon)}
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-xl text-black tracking-tight">
                                {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>


            </div>
        </section>
    )
}