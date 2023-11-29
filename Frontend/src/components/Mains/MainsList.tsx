import { MainCourse } from "@/types/mainCourse";
import MainCourseCard from "./MainCourseCard";
import Link from "next/link";

function MainsList({ mains }: { mains: MainCourse[] }) {
  return (
    <div>
      <h2 className="mb-2 font-semibold text-lg">{mains[0].category}</h2>
      <ul className="flex gap-4 overflow-x-auto scrollbar-hide">
        {mains.map((mainCourse) => (
          <li key={mainCourse.id}>
            <Link href={`/mains/${mainCourse.id}`}>
              <MainCourseCard
                title={mainCourse.title}
                price={mainCourse.price}
                image={mainCourse.image}
                rating={mainCourse.rating}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MainsList;
