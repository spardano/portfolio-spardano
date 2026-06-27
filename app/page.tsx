import Image from "next/image";
import Headers from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Credentials from "./components/credentials";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
       <Headers />
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Credentials />
        <Contact />
    </main>
  );
}
