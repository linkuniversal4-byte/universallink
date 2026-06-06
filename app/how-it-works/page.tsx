import Navbar from "../components/Navbar";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <HowItWorks />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
