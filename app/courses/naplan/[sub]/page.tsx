import CourseDetail from "../../../components/CourseDetail";

export default async function NAPLANSubCourse({ params }: { params: Promise<{ sub: string }> }) {
  const { sub } = await params;
  return <CourseDetail subject="naplan" sub={sub} />;
}
