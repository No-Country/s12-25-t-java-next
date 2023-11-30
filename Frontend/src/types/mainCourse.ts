export interface MainCourse {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  optionals: string[];
}

export type NonEssentialMainCourse = Omit<
  MainCourse,
  "id" | "description" | "category" | "optionals"
>;
