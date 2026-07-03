import Image from "next/image";
import Headers from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Credentials from "./components/credentials";
import Contact from "./components/contact";
import SelectedProjects from "./components/selectedProjects";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-visible">
      <Headers />
      <main className="w-full overflow-visible">
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <Credentials />
        <SelectedProjects />
        <Contact />
      </main>
    </div>
  );
}
