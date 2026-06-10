import CourseDetail from "../../../components/CourseDetail";

export default async function ScienceSubCourse({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <CourseDetail subject="science" sub={sub} />;
}
