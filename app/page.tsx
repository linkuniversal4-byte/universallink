"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCourses from "./components/HomeCourses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Team from "./components/Team";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HomeCourses />
        <Pricing />
        <Team/>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}
