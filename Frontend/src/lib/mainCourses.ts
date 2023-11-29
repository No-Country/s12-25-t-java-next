import "server-only";

import { MainCourse } from "@/types/mainCourse";

const baseUrl = process.env.BASE_URL;

export async function getMainCourses(): Promise<MainCourse[]> {
  const url = `${baseUrl}/api/mains`;
  const res = await fetch(url);
  return await res.json();
}
