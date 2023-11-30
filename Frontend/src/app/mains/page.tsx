import MainsList from "@/components/Mains/MainsList";
import { getMainCourses } from "@/lib/mainCourses";
import { MainCourse } from "@/types/mainCourse";

export const metadata = {
  title: "Platos",
};

async function MainsPage() {
  const mains = await getMainCourses();
  const categories = [
    ...new Set(mains.map((mainCourse) => mainCourse.category)),
  ];

  return (
    <>
      {categories.map((category) => {
        const mainsByCategory: MainCourse[] = mains.filter(
          (mainCourse) => mainCourse.category === category,
        );

        return (
          <div key={category} className="pl-4">
            <MainsList mains={mainsByCategory} />
          </div>
        );
      })}
    </>
  );
}
export default MainsPage;
