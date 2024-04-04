import Navbar from "@/components/navbar";
import { BackgroundBeams } from "@/components/ui/background-beam";
import Hero from "@/components/hero";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Techonologis from "@/components/techonologis";
import Link from "next/link";

export default function page() {
  return (
    <div className='container max-h-screen w-screen '>
      <main className='h-full w-screen  mx-auto py-16 px-28  bg-neutral-900 text-neutral-200 antialiased max-sm:px-10 max-sm:text-xs overflow-x-hidden '>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Techonologis />
        <Projects />
        <Contact />
        <BackgroundBeams />
      </main>
    </div>
  );
}
