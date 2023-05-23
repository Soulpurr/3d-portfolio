"use client";
import Image from "next/image";
import {
  About,
  Contact,
  Experience,
  Feedback,
  Hero,
  Navbar,
  Tech,
  Work,
  StarsCanvas,
} from "../components";
export default function Home() {
  return (
    <div className="">
      <div className="relative z-0 bg-[#13131e] ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}
