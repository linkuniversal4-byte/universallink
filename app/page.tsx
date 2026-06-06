"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialConnect from "./components/SocialConnect";
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
        <SocialConnect />
        <Team/>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      
    </>
  );
}
