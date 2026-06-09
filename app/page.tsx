"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Team/>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}
