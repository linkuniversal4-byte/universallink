import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function EnrollPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
