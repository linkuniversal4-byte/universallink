import Navbar from "../components/Navbar";
import HomeCourses from "../components/HomeCourses";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <HomeCourses />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
