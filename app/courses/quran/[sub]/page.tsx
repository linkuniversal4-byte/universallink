import CourseDetail from "../../../components/CourseDetail";

export default async function QuranSubCourse({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <CourseDetail subject="quran" sub={sub} />;
}
