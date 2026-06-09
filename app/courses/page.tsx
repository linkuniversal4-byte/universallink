import Navbar from "../components/Navbar";
import Courses from "../components/Courses";
import CourseDetail from "../components/CourseDetail";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default async function CoursesPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string; sub?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        {params.subject && params.sub ? (
          <CourseDetail subject={params.subject} sub={params.sub} />
        ) : (
          <Courses />
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
