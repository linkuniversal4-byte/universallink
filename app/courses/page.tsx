import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Courses />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
