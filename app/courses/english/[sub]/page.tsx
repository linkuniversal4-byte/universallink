import CourseDetail from "../../../components/CourseDetail";

export default async function EnglishSubCourse({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <CourseDetail subject="english" sub={sub} />;
}
