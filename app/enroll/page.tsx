import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default async function EnrollPage({ searchParams }: { searchParams: Promise<{ course?: string }> }) {
  const { course } = await searchParams;
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Contact defaultCourse={course} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
