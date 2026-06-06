import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
