import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <About showHowItWorks={false} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
